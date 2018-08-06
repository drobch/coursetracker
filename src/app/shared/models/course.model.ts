import UserCourses from './UserCourses';

export class Course {
  id: string;
  title: string;
  status: boolean;
  progress?: number;
  // recommendations?: this;
  description?: string;
  lastUpdate?: Date;
}
