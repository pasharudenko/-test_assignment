import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { MessageRepository } from './message.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [MessageRepository],
  exports: [MessageRepository],
})
export class RepositoryModule {}
