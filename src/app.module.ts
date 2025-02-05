import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MyConfigModule,
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: process.env.DB_SYNC === 'true',
      autoLoadEntities: true,
      //Logger setings to log error's and warn's in the ORM.
      logger: 'file',
      logging: ['error'],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
