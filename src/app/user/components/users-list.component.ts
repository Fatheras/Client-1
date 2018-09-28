import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../../http.service';
import { IUser } from '../users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {

  public users: IUser[];

  constructor(private httpService: HttpService) {

  }

  public ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.httpService.getUsers().subscribe(data => this.users = data);
  }
}
