import { Injectable } from '@nestjs/common';
import { Meeting } from './interfaces/meeting.interface';

@Injectable()
export class MeetingsService {
  private readonly meetings: Meeting[] = [];

  async create(meeting: Meeting): Promise<void> {
    this.meetings.push(meeting);
  }

  all(): Meeting[] {
    return this.meetings;
  }
}
