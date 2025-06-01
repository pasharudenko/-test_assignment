import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Message } from '../database/entities/message.entity';
import { IMessageRepository } from '@application/repositories/message.interface';
import { MessageEntity } from '@domain/message.entity';

@Injectable()
export class MessageRepository implements IMessageRepository {
  constructor(
    @Inject('MESSAGE_REPOSITORY')
    private messageRepository: Repository<Message>,
  ) {}

  async find(offset = 0, limit = 20) {
    const messages = await this.messageRepository.find({
      order: { timestamp: 'DESC' },
      skip: offset,
      take: limit,
    });
    return messages.map(MessageEntity.getEntity);
  }

  async create(data: MessageEntity) {
    const message = await this.messageRepository.save(data);

    return MessageEntity.getEntity(message);
  }
}
