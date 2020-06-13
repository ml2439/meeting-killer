import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateMeetingDto } from './dto/CreateMeetingDto';
import { MeetingsService } from './meetings.service';

@Controller('meetings')
export class MeetingsController {
  constructor(private meetingsService: MeetingsService) {}

  @Post()
  async create(@Body() createMeetingDto: CreateMeetingDto): Promise<string> {
    await this.meetingsService.create(createMeetingDto);
    return `This action creates a new meeting: ${createMeetingDto.name}`;
  }

  @Get()
  all(): string {
    return 'This action returns all meetings';
  }

  @Get(':id')
  one(@Param('id') id: string): string {
    return `This action returns meeting ${id}`;
  }
}
