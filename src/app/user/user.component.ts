import { UserModel } from './../model/user.model';
import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
public users: Array<UserModel>;
  constructor(private UserService: UserService) { }

  ngOnInit(){
    this.loadUsers();
  }

  private loadUsers(): void {
    this.UserService.getUsers().subscribe(res =>{
      this.users = res;
      console.log(res);
    });
  }

}
