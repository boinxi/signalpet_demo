import {logger} from "../src/logger";
import { Request, Response, NextFunction } from 'express'; // Ensure Response is imported

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const time = new Date(Date.now()).toString();
    const msg = `${req.method} ${req.path} ${time}`;
    logger.info(msg);
    next();
}