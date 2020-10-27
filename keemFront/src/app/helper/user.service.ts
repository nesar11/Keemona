import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:3200/api/auth/users';

  constructor( private http: HttpClient,
               private route: Router) { }

  getUsers(){
  return this.http.get(this.userUrl);
  }
}
