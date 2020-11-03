import { Component, OnInit } from '@angular/core';
import User from '../../../core/models/user';
import {UserService } from '../../../../helper/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users: User[];
displayedColumns: string[] = ['email', 'role', 'createdAt', 'isActive'];

  constructor(private us: UserService) { }

  ngOnInit() {
    this.us.getUsers()
    .subscribe((data: User[]) =>{
      this.users = data;
      console.log(this.users);
    })
  }


}
