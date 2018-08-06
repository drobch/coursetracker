import { Injectable } from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {User} from '../shared/models/user.model';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  authToken: any;


  constructor(private http: HttpClient,
              private router: Router) {}

  registerUser(user: User) {
    console.log('USER: ', user);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post('http://localhost:3000/register', user, httpOptions)
      .pipe(catchError(this.handleError));
  }

  login(user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('http://localhost:3000/login', user, httpOptions)
      .pipe(catchError(this.handleError));
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  storeUserData (token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getUser() {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authToken,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get('http://localhost:3000/account', httpOptions)
      .pipe(catchError(this.handleError));
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
