import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { Router } from '@angular/router';
import User from '../../core/models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signUpUrl = 'http://localhost:3200/api/auth/signup';
  private loginUrl = 'http://localhost:3200/api/auth/login';

user: User[];
  constructor( private http: HttpClient,
               private router: Router) { }

  signupUser(user: User): Observable<User>{

    console.log(user);
    return this.http.post<any>(this.signUpUrl, user);
  }

  loginUser(user){
    return this.http.post<any>(this.loginUrl, user);
  }

  loggedIn(){
    return !!localStorage.getItem('accessToken');
  }

  getToken(){
    return localStorage.getItem('accessToken');
    this.router.navigate(['/users']);
  }

  logoutUser(){
    localStorage.removeItem('accessToken');
  }
}
