import { Controller, Get, Ip, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Ip() Ip:string): string {
    this.logger.log(`Request IP: ${Ip}`);
    // second way 
    Logger.verbose(`GetHello call from Ip: ${Ip}`,AppController.name);
    return this.appService.getHello();
  }
}
