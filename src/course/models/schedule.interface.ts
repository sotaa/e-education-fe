import { Document } from 'mongoose';

export interface ISchedule extends Document {
  date: string;
  time: string;
  period: string;
}
