import UserCourses from './UserCourses';

export interface ICourse {
  id: number;
  title: string;
  status: boolean;
  progress?: number;
  // recommendations?: this;
  description?: string;
  lastUpdate?: Date;
}
