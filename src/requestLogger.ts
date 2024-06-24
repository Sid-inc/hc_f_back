import { NextFunction, Request, Response } from 'express';

export function requestLogger(req: Request<any>, res: Response, next: NextFunction) {
  console.log(`Geted request: Method - ${req.method} | From Host - ${req.hostname} | Ip - ${req.ip} | Target - ${req.url}`);
  next();
}
