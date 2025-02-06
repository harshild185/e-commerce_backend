import { Controller, Get, Ip, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { WinstonLogger } from './config/winston.logger';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  private readonly winstonLogger = new WinstonLogger();
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Ip() Ip:string): string {
    this.logger.log(`Request IP: ${Ip}`);
    // second way 
    Logger.verbose(`GetHello call from Ip: ${Ip}`,AppController.name);

    this.winstonLogger.info(`GetHello call from Ip: ${Ip}`);
    return this.appService.getHello();
  }
}
