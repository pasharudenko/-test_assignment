import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { CreateMessageUsecase } from '@application/usecases/create-message.usecase';
import { MessageEntity } from '@domain/message.entity';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly createMessageUsecase: CreateMessageUsecase) {}

  @SubscribeMessage('message:create')
  async create(@MessageBody() data: MessageEntity) {
    const message = await this.createMessageUsecase.execute(data);
    this.server.emit('message:get', message);
    return message;
  }
}
