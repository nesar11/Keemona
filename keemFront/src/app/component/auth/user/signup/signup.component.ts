import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupData = {};
  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {

  }
  signupUser(){
      this.auth.signupUser(this.signupData)
      .subscribe(
      res => { console.log(res);
               localStorage.setItem('token', res.token);
               this.router.navigate(['/home'])},
      err => console.log(err)
      );
  }

}
