import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { IConfig } from '@application/services/config.interface';

@Injectable()
export class ConfigService implements IConfig {
  constructor(private configService: NestConfigService) {}

  getRestApiURL() {
    return this.configService.get<string>('REST_API_URL');
  }
}
