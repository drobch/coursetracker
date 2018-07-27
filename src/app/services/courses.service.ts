import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { ICourse } from '../shared/models/Course';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {


  private url = 'https://my.api.mockaroo.com/courses.json?key=e6390a40';
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

  getCourses (): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(this.url).pipe(
      map(res => res),
      catchError((err) => err.code === 404
      ? throwError('Not found 404')
      : throwError(err)
      )
    );
  }
}

