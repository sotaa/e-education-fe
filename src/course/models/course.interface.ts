import { ISchedule } from './schedule.interface';
import { IParticipant } from './participant.interface';
import { Document } from 'mongoose';
import { IUser } from './user.interface';

export interface ICourse extends Document {
  title: string;
  teacher: IUser;
  schedules: ISchedule[];
  participants: IParticipant[];
}
