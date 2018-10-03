import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../users';
import { UserFormComponent } from '../user-form/user-form.component';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent implements OnInit {

  @Input() user: IUser;

  constructor(private httpService: UserService, private activateRoute: ActivatedRoute, private router: Router ) {

  }

  @Output() add: EventEmitter<IUser> = new EventEmitter();

  public addUser(model: IUser) {
    this.add.emit(model);
  }

  public ngOnInit() {

  }

}
