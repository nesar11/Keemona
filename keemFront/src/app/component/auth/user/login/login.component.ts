import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // isAuthenticated: boolean;
  loginDatA = {};
  cFrom: FormGroup;

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.cFrom = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginUser(){
    this.auth.loginUser(this.cFrom.value)
    .subscribe(
      res =>{ console.log(res);
      localStorage.setItem('accessToken', res.accessToken);
      this.router.navigate(['/projects'])}
    ,
      err => console.log(err)
    )
  }
}
