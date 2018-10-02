import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
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

  constructor(private httpService: UserService, private activateRoute: ActivatedRoute, private router: Router ) {

  }

  @ViewChild(UserFormComponent)
  private _userFormComponent: UserFormComponent;

  @Output() add: EventEmitter<IUser> = new EventEmitter();

  public addUser() {
    this.add.emit({
      firstname: this._userFormComponent.controls['firstname'].value,
      lastname: this._userFormComponent.controls['lastname'].value,
      address: this._userFormComponent.controls['address'].value,
      phone: this._userFormComponent.controls['phone'].value,
    });
  }

  public ngOnInit() {

  }

}
