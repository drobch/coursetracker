import UserCourses from './UserCourses';

export interface ICourse {
  id: string;
  title: string;
  status: boolean;
  progress?: number;
  // recommendations?: this;
  description?: string;
  lastUpdate?: Date;
}
