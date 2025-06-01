import { IMessageRepository } from '../repositories/message.interface';

export class GetMessagesUsecase {
  constructor(private readonly messageRepository: IMessageRepository) {}

  execute(offset?: number, limit?: number) {
    return this.messageRepository.find(offset, limit);
  }
}
