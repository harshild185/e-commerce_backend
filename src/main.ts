import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { CustomLogger } from './config/custom.logger';
import { WinstonLogger } from './config/winston.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, 
    // {// it will accept boolean or array of levels or custom logger service
    //   logger: ['error', 'warn', 'debug'],
    // }
  );
  // overriding build-in logger
  app.useLogger(new CustomLogger())

  const configService = app.get(ConfigService);

  // Retrieving the application port from the configuration or using the default value of 3000
  const port = configService.get<number>('app.port', 3000);
  await app.listen(port);
  // console.log(`Application is running on: ${await app.getUrl()}`);

  // direct
  Logger.log(`This application is running on: ${await app.getUrl()}`)

  //  With Logger context
  // const logger = new Logger("Bootstrap");
  // logger.debug(`Application is running on: ${await app.getUrl()}`);

  // direct with context
  Logger.warn(`Application is running on: ${await app.getUrl()}`, "Bootstrap");
  Logger.error(`Application is running on: ${await app.getUrl()}`);

  // Without overriding build-in logger
  const customlogger = new CustomLogger('Bootstrap') // the string indicates the logLocation
  customlogger.error(`Application is running on: ${await app.getUrl()}`);
  customlogger.debug(`Application is running on: ${await app.getUrl()}`);
  customlogger.warn(`Application is running on: ${await app.getUrl()}`);

  const logger = new WinstonLogger();
  const appUrl = await app.getUrl();

  // cli and npm levels
  logger.error(`Application is running on: ${appUrl}`);
  logger.warn(`Application is running on: ${appUrl}`);
  logger.info(`Application is running on: ${appUrl}`);
  logger.debug(`Application is running on: ${appUrl}`);
  logger.http(`Application is running on: ${appUrl}`);
  logger.verbose(`Application is running on: ${appUrl}`);
  logger.input(`Application is running on: ${appUrl}`);
  logger.silly(`Application is running on: ${appUrl}`);
  logger.data(`Application is running on: ${appUrl}`);
  logger.help(`Application is running on: ${appUrl}`);
  logger.prompt(`Application is running on: ${appUrl}`);
  // syslog level
  logger.emerg(`Application is running on: ${appUrl}`);
  logger.alert(`Application is running on: ${appUrl}`);
  logger.crit(`Application is running on: ${appUrl}`);
  logger.notice(`Application is running on: ${appUrl}`);
}
bootstrap();
/**
 * The major disadvantage of using this method is that we can’t 
 * disable the logger at the application level. For example:
 * 
 * const app = await NestFactory.create(AppModule, { logger:false } );
 */