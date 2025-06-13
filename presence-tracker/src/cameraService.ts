import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CookieJar, Cookie } from 'tough-cookie';

interface CameraInfo {
  cam_id: number;
  name: string;
  title: string;
  playback_config: {
    token: string;
    dToken: string;
  };
  server: {
    hostname: string;
    https_port: number;
    ssl: boolean;
  };
}

interface CameraListResponse {
  success: boolean;
  result: {
    cameras: CameraInfo[];
    count: number;
  };
}

export class CameraService {
  private readonly baseUrl = 'https://cloud.dvor24.com';
  private cookieJar = new CookieJar();
  private xsrfToken: string = '';
  private cameraInfo: CameraInfo | null = null;

  constructor(
    private readonly login: string,
    private readonly password: string,
    private readonly cameraSearchQuery: string
  ) { }

  private async request<T = any>(
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const url = new URL(config.url || '', this.baseUrl).toString();
    const cookies = await this.cookieJar.getCookies(url);

    const response = await axios({
      ...config,
      baseURL: this.baseUrl,
      url,
      headers: {
        ...config.headers,
        'Cookie': cookies.map(c => c.cookieString()).join('; '),
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'no-cache',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'X-XSRF-TOKEN': this.xsrfToken
      },
      maxRedirects: 0,
      timeout: 10000,
      validateStatus: null
    });

    if (response.headers['set-cookie']) {
      const setCookies = Array.isArray(response.headers['set-cookie'])
        ? response.headers['set-cookie']
        : [response.headers['set-cookie']];

      for (const cookieStr of setCookies) {
        const cookie = Cookie.parse(cookieStr);
        if (cookie) {
          await this.cookieJar.setCookie(cookie, url);
          if (cookie.key === 'XSRF-TOKEN') {
            this.xsrfToken = cookie.value;
          }
        }
      }
    }

    return response;
  }

  public async initialize(): Promise<void> {
    try {
      // 1. Получаем начальную страницу для CSRF токена
      const getResponse = await this.request<string>({
        method: 'GET',
        url: '/login',
        responseType: 'text'
      });

      // 2. Отправляем данные авторизации
      const postResponse = await this.request({
        method: 'POST',
        url: '/login',
        data: {
          login: this.login,
          password: this.password,
          _token: this.xsrfToken
        },
        headers: {
          'Content-Type': 'application/json',
          'Referer': `${this.baseUrl}/login`,
          'X-Inertia': 'true'
        }
      });

      if (postResponse.status !== 302 || !postResponse.headers['location']) {
        throw new Error('Authentication failed - no redirect after login');
      }

      // 3. Загружаем целевую страницу после авторизации
      await this.request({
        method: 'GET',
        url: postResponse.headers['location']
      });

    } catch (error) {
      console.error('Authentication failed:');
      console.error('XSRF Token:', this.xsrfToken);
      console.error('Cookies:', await this.cookieJar.getCookies(this.baseUrl));
      throw error;
    }
  }

  private async getCameraInfo(): Promise<CameraInfo> {
    if (this.cameraInfo) {
      return this.cameraInfo;
    }

    const searchParams = new URLSearchParams({
      limit: '96',
      offset: '0',
      favorite: 'false',
      search: this.cameraSearchQuery,
      page: '1'
    });

    const response = await this.request<CameraListResponse>({
      method: 'GET',
      url: `/ajax/camera-list?${searchParams.toString()}`,
      headers: {
        'Referer': `${this.baseUrl}/cameras`
      }
    });

    if (!response.data.success || response.data.result.count === 0) {
      throw new Error(`Camera "${this.cameraSearchQuery}" not found`);
    }

    if (response.data.result.count > 1) {
      console.warn(`Found ${response.data.result.count} cameras, using first one`);
    }

    this.cameraInfo = response.data.result.cameras[0];
    return this.cameraInfo;
  }

  public async getSnapshot(): Promise<Buffer> {
    try {
      const camera = await this.getCameraInfo();
      
      const previewUrl = `https://${camera.server.hostname}:${camera.server.https_port}/cameras/${camera.name}/preview?token=${camera.playback_config.token}`;
      
      const cookies = await this.cookieJar.getCookies(previewUrl);
      const imageResponse = await axios.get(previewUrl, {
        responseType: 'arraybuffer',
        headers: {
          'Cookie': cookies.map(c => c.cookieString()).join('; '),
          'Referer': `${this.baseUrl}/cameras`
        },
        timeout: 10000
      });

      return Buffer.from(imageResponse.data, 'binary');
    } catch (error) {
      console.error('Failed to get snapshot:');
      if (error instanceof Error) {
        console.error(error.message);
      }
      throw new Error('Failed to retrieve camera snapshot');
    }
  }
}