import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, find } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { Course } from '../shared/models/course.model';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course>('/api/courses');
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>('/api/cat', course);
  }

  getCourse(course: Course): Observable<Course> {
    return this.http.get<Course>(`/Courses/${Course.id}`);
  }

  /*  getCourse(id: number | string): Observable<Course> {
      return this.http.get<Course[]>('/courses/:id').pipe(
        map(courses => courses.find(crs => crs.id === +id)),
        catchError((err) => err.code === 404
          ? throwError('Not found 404')
          : throwError(err)
        )
      );
    }

    getCourseDetail(id: number | string): Observable<Course> {
      return this.http.get<Course[]>(this.urlCourse).pipe(
        map(courses => courses.find(crs => crs.id === +id)),
        catchError((err) => err.code === 404
          ? throwError('Not found 404')
          : throwError(err)
        )
      );
    }*/
}

