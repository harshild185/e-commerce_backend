import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as winston from 'winston';

@Injectable()
export class WinstonLogger {
  private readonly logger: winston.Logger;

  constructor() {
    const logDir = path.join(process.cwd(), 'logs');

    this.logger = winston.createLogger({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.printf(
          (info) => `${info.timestamp} [${info.level}]: ${info.message}`,
        ),
      ),
      transports: [
        new winston.transports.File({
          filename: 'application.log',
          dirname: logDir,
        }),
      ],
    });

    if (process.env.NODE_ENV !== 'production') {
      this.logger.add(new winston.transports.Console());
    }
  }

  error(message: string, trace?: string) {
    this.logger.error(`${message} - ${trace}`);
  }

  warn(message: string, trace?: string) {
    this.logger.warn(message);
  }

  debug(message: string, trace?: string) {
    this.logger.debug(message);
  }

  info(message: string, trace?: string) {
    this.logger.info(message);
  }
}
