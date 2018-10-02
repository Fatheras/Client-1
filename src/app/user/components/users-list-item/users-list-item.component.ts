import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../users';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-users-list-item',
  templateUrl: './users-list-item.component.html',
  styleUrls: ['users-list-item.component.css']
})
export class UsersListItemComponent implements OnInit {

  @Input() user: IUser;
  @Output() delete: EventEmitter<number> = new EventEmitter();

  constructor(private httpService: UserService, private activateRoute: ActivatedRoute, private router: Router ) {

  }

  public deleteUser() {
    this.delete.emit(this.user.id);
  }

  public editUser() {
    this.router.navigate([`/user/${this.user.id}`]);
  }

  public ngOnInit() {

  }

}
