import * as path from 'path';
import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { messageProvider } from './providers/message.provider';

@Module({
  providers: [
    {
      provide: 'DATA_SOURCE',
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const dataSource = new DataSource({
          type: 'mysql',
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_NAME'),
          entities: [path.join(__dirname, 'entities', '*.entity.{ts,js}')],
          synchronize: true,
        });

        return dataSource.initialize();
      },
    },
    messageProvider,
  ],
  exports: [messageProvider],
})
export class DatabaseModule {}
