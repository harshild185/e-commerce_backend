import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            envFilePath: '.env',
            isGlobal: true, //If "true", the ConfigModule will registers as a global module in application. can be accessable in any module
        })
    ],
})
export class MyConfigModule {}
