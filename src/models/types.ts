import { Request } from 'express';

/**
 * Модель запроса с параметрами.
 */
export type RequestWithParams<T> = Request<T>;

/**
 * Модель запроса с body.
 */
export type RequestWithBody<T> = Request<{}, {}, T>;

/**
 * Модель запроса с query параметрами.
 */
export type RequestWithQuery<T> = Request<{}, {}, {}, T>;