import { Injectable } from '@angular/core';
import { from, Observable, throwError} from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, find, filter } from 'rxjs/operators';
import { User } from '../shared/models/user.model';
import { USERS } from '../mock/users';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>('/users/register', user);
  }

  login(credentials): Observable<any> {
    return this.http.post('/users/login', credentials);
  }

  getUser(id): Observable<User> {
    return this.http.post('/users/account', id);
  }

}
