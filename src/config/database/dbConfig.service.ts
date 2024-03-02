import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PartialType } from '@nestjs/mapped-types';
import { ConnectOptions } from 'typeorm';

@Injectable()
export class DatabaseConfigService {
  constructor(private readonly configService: ConfigService) {}

  get type() {
    return this.configService.get('database.mysql.type');
  }
  get mysqlHost() {
    return this.configService.get('database.mysql.mysqlHost');
  }
  get mysqlPort() {
    return this.configService.get('database.mysql.mysqlPort');
  }
  get mysqlUserName() {
    return this.configService.get('database.mysql.mysqlUserName');
  }
  get mysqlPassword() {
    return this.configService.get('database.mysql.mysqlPassword');
  }
  get mysqlDbName() {
    return this.configService.get('database.mysql.mysqlDbName');
  }
  get entities() {
    return this.configService.get('database.mysql.entities');
  }
  get migrations() {
    return this.configService.get('database.mysql.migrations');
  }

  get connections() {
    return {
      type: this.type,
      host: this.mysqlHost,
      port: this.mysqlPort,
      username: this.mysqlUserName,
      //   password: this.mysqlPassword,
      database: this.mysqlDbName,
      entities: this.entities,
    } as Partial<ConnectOptions>;
  }
}
