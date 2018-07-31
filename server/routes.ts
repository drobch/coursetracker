import * as express from 'express';

import CourseCtrl from './controllers/course';
import UserCtrl from './controllers/user';

export default function setRoutes(app) {

  const router = express.Router();

  const courseCtrl = new CourseCtrl();
  const userCtrl = new UserCtrl();

  // courses
  router.route('/courses').get(courseCtrl.getAll);
  router.route('/courses/count').get(courseCtrl.count);
  router.route('/courses').post(courseCtrl.insert);
  router.route('/courses/:id').get(courseCtrl.get);
  router.route('/courses/:id').put(courseCtrl.update);
  router.route('/courses/:id').delete(courseCtrl.delete);

  // users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);


  // userCourses
  router.route('/courses').get(courseCtrl.getAll);
  router.route('/courses/count').get(courseCtrl.count);
  router.route('/courses').post(courseCtrl.insert);
  router.route('/courses/:id').get(courseCtrl.get);
  router.route('/courses/:id').put(courseCtrl.update);
  router.route('/courses/:id').delete(courseCtrl.delete);

  app.use('/api', router);

}