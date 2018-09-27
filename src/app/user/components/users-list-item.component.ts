import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../http.service';
import { IUser } from '../users';

@Component({
  selector: 'app-users-list-item',
  templateUrl: './users-list-item.component.html',
})
export class UsersListItemComponent implements OnInit {

  @Input() user: IUser;

  constructor(private httpService: HttpService) {

  }

  deleteUser() {
    this.httpService.deleteUser(this.user.id).subscribe();
  }

  ngOnInit() {

  }

}
