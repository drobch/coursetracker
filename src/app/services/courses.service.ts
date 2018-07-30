import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import {catchError, find} from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { ICourse } from '../shared/models/Course';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {


  private urlCourses = 'https://my.api.mockaroo.com/courses.json?key=e6390a40';
  private urlCourse = 'https://my.api.mockaroo.com/course.json?key=e6390a40';
  /*private courses: ICourse[] = [
    {
      id: '1',
      title: 'English',
      description: 'Descriptrssfksfsjfion."',
      status: false
    },
    {
      id: '2',
      title: 'English fff',
      description: 'Descriptrssfksfsjfion.',
      status: false
    },
    {
      id: '3',
      title: 'English jjjj',
      description: 'Descriptrssfksfsjfion.',
      status: false
    },
    {
      id: '4',
      title: 'English yjyj',
      description: 'Descriptrssfksfsjfion.',
      status: false
    }
  ];*/


  constructor(private http: HttpClient) { }

  getCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(this.urlCourses).pipe(
      map(res => res),
      catchError((err) => err.code === 404
      ? throwError('Not found 404')
      : throwError(err)
      )
    );
  }
  getCourse(id: number | string): Observable<ICourse> {
    return this.http.get<ICourse[]>(this.urlCourses).pipe(
      map(courses => courses.find(crs => crs.id === +id)),
      catchError((err) => err.code === 404
        ? throwError('Not found 404')
        : throwError(err)
      )
    );
  }

  getCourseDetail(id: number | string): Observable<ICourse> {
    return this.http.get<ICourse[]>(this.urlCourse).pipe(
      map(courses => courses.find(crs => crs.id === +id)),
      catchError((err) => err.code === 404
        ? throwError('Not found 404')
        : throwError(err)
      )
    );
  }
}

