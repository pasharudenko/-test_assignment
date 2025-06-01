import { Controller, Get, Query } from '@nestjs/common';
import { GetMessagesUsecase } from '@application/usecases/get-messages.usecase';
import { GetMessagesDto } from './dto/get-messages.dto';

@Controller('messages')
export class ChatController {
  constructor(private readonly getMessagesUsecase: GetMessagesUsecase) {}

  @Get()
  async getMessages(@Query() query: GetMessagesDto) {
    return this.getMessagesUsecase.execute(query.offset, query.limit);
  }
}
