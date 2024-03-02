import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get appEnv() {
    return this.configService.get('app.appEnv');
  }

  get appPort() {
    return this.configService.get('app.appPort');
  }
}
