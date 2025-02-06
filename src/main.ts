import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, 
    // {// it will accept boolean or array of levels or custom logger service
    //   logger: ['error', 'warn', 'debug'],
    // }
);
  const configService = app.get(ConfigService);

  // Retrieving the application port from the configuration or using the default value of 3000
  const port = configService.get<number>('app.port', 3000);
  
  await app.listen(port);
  // console.log(`Application is running on: ${await app.getUrl()}`);

  // direct
  Logger.log(`This application is running on: ${await app.getUrl()}`)

  //  With Logger context
  const logger = new Logger("Bootstrap");
  logger.debug(`Application is running on: ${await app.getUrl()}`);

  // direct with context
  Logger.warn(`Application is running on: ${await app.getUrl()}`, "Bootstrap");
}
bootstrap();
