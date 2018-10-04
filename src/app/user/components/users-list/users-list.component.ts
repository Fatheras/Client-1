import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../users';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {

  public users: IUser[];

  constructor(private httpService: UserService, private router: Router) {

  }

  public deleteUser(userId: number) {
    this.httpService.deleteUser(userId)
      .pipe(
        switchMap(() => this.getUsers())
      )
      .subscribe((users: IUser[]) => {
        this.users = users;
      });
  }

  public addUser(model: IUser) {
    this.httpService.postUser(model)
    .pipe(
      switchMap(() => this.getUsers())
    )
    .subscribe((users: IUser[]) => {
      this.users = users;
    });
  }

  private getUsers() {
    return this.httpService.getUsers();
  }

  public ngOnInit() {
    this.getUsers()
      .subscribe((users: IUser[]) => {
        this.users = users;
      });
  }
}
