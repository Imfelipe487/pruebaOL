import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User[] = [];


  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe(user => this.user = user);
  }

}
