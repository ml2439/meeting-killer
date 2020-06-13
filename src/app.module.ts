import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetingModule } from './meetings/meetings.module';

@Module({
  imports: [MeetingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
