import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import dbConfig from './db.config';
import * as Joi from 'joi';
import { DatabaseConfigService } from './dbConfig.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dbConfig],
      validationSchema: Joi.object({
        MYSQL_DB_NAME: Joi.string().required(),
        MYSQL_HOST: Joi.string().required(),
        MYSQL_PORT: Joi.number().required(),
        MYSQL_USERNAME: Joi.string().required(),
        MYSQL_PASSWORD: Joi.string(),
      }),
    }),
  ],
  providers: [ConfigService, DatabaseConfigService],
  exports: [ConfigService, DatabaseConfigService],
})
export class DatabaseConfigModule {}
