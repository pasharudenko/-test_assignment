import { MessageEntity } from '@domain/message.entity';

export interface IMessageRepository {
  find(offset?: number, limit?: number): Promise<MessageEntity[]>;
  create(data: MessageEntity): Promise<MessageEntity>;
}
