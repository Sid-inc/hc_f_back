declare module 'wake_on_lan' {
  function wake(
    mac: string,
    callback?: (error: Error | null) => void
  ): void;
  function wake(
    mac: string,
    options: { address?: string; port?: number },
    callback?: (error: Error | null) => void
  ): void;
  export = wake;
}