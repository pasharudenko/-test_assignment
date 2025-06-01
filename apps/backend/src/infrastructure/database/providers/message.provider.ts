import { DataSource } from 'typeorm';
import { Message } from '../entities/message.entity';

export const messageProvider = {
  inject: ['DATA_SOURCE'],
  provide: 'MESSAGE_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Message),
};
