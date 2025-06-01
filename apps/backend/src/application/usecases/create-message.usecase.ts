import { IMessageRepository } from '../repositories/message.interface';
import { IRestService } from '../services/rest.interface';
import { IConfig } from '../services/config.interface';
import { MessageEntity } from '@domain/message.entity';

export class CreateMessageUsecase {
  constructor(
    private readonly messageRepository: IMessageRepository,
    private readonly restService: IRestService,
    private readonly configService: IConfig,
  ) {}

  async execute(data: MessageEntity) {
    const response = await this.restService.post<MessageEntity>(
      this.configService.getRestApiURL(),
      data,
    );

    return this.messageRepository.create(response);
  }
}
