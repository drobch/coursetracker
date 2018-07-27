import UserCourses from './UserCourses';

export class User {
  id: string;
  username: string;
  email: string;
  password: string;
  age?: number;
  gender?: string;
  role?: string;
  created?: Date;
  courses?: UserCourses[];
}
