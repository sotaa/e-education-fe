import { Course, ICourse } from "../models";

export class CourseController {
    async getCourses(params: Partial<ICourse>) {
      return await Course.find(params);
    }
}