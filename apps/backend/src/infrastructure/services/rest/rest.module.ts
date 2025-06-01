import { Module } from '@nestjs/common';
import { RestService } from './rest.service';

@Module({
  imports: [],
  providers: [RestService],
  exports: [RestService],
})
export class RestModule {}
