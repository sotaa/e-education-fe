import { Document } from 'mongoose';

export interface IParticipant extends Document {
  name: string;
  mobile: string;
}
