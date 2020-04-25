import { Document } from 'mongoose';
import { ITeacher } from './teacher.interface';

export interface ICourse extends Document {
    title: string;
    teacher: ITeacher;
    participants: string[];
}
