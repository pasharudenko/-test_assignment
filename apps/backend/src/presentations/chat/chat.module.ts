import { Module } from '@nestjs/common';
import { RepositoryModule } from '@infrastructure/repositories/repository.module';
import { MessageRepository } from '@infrastructure/repositories/message.repository';

import { RestModule } from '@infrastructure/services/rest/rest.module';
import { RestService } from '@infrastructure/services/rest/rest.service';

import { ConfigModule } from '@infrastructure/services/config/config.module';
import { ConfigService } from '@infrastructure/services/config/config.service';

import { GetMessagesUsecase } from '@application/usecases/get-messages.usecase';
import { CreateMessageUsecase } from '@application/usecases/create-message.usecase';

import { ChatGateway } from './chat.gateway';
import { ChatController } from './chat.controller';

@Module({
  imports: [RepositoryModule, RestModule, ConfigModule],
  controllers: [ChatController],
  providers: [
    ChatGateway,
    {
      inject: [MessageRepository],
      provide: GetMessagesUsecase,
      useFactory: (messageRepository: MessageRepository) =>
        new GetMessagesUsecase(messageRepository),
    },
    {
      inject: [MessageRepository, RestService, ConfigService],
      provide: CreateMessageUsecase,
      useFactory: (
        messageRepository: MessageRepository,
        restService: RestService,
        configService: ConfigService,
      ) =>
        new CreateMessageUsecase(messageRepository, restService, configService),
    },
  ],
})
export class ChatModule {}
