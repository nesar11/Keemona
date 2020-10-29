import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupData = {};
  loading: false;
  myForm: FormGroup;
  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) {

              }

  ngOnInit() {

    this.myForm = this.fb.group({
      email: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
    });

  }
  signupUser(){
      this.auth.signupUser(this.myForm.value)
      .subscribe(
      res => {
               localStorage.setItem('accessToken', res.accessToken);
               this.router.navigate(['/projects'])

              },
      err => console.log(err)
      );
  }

}
