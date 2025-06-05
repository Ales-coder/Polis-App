import { CourseDto } from './course.dto'; // Make sure you also define Course model

export interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  courses: CourseDto[];
}
