import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '../../../http.service';
import { IUser } from '../../users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {

  public users: IUser[];

  constructor(private httpService: HttpService, private router: Router) {

  }

  public ngOnInit() {
    this.getUsers();
  }

  public deleteUser(userId: number) {
    this.httpService.deleteUser(userId)
       .subscribe(() => {
          this.getUsers();
    });
  }

  public addUser(model: IUser) {
    this.httpService.postUser(model).subscribe(() => this.getUsers());
  }

  public getUsers() {
    this.httpService.getUsers().subscribe(data => this.users = data);
  }
}
