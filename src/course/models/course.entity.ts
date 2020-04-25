import { Schema, Model, model, Types } from 'mongoose';
import { ICourse } from './course.interface';

// TODO: add validation
const CourseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: [true, 'عنوان کلاس اجباری است'],
  },
  teacher: {
    type: Types.ObjectId,
    ref: 'Teacher',
    required: [true, 'معلم چی پس؟'],
  },
  participants: [String],
});

export const Course: Model<ICourse> = model<ICourse>('Course', CourseSchema);
