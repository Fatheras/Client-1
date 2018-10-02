import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../users';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFormComponent } from '../user-form/user-form.component';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  @Input() user: IUser;

  @ViewChild(UserFormComponent)
  private _userFormComponent: UserFormComponent;


  constructor(private httpService: UserService, private activateRoute: ActivatedRoute, private router: Router ) {

  }

  public cancel() {
    this.router.navigate(['/users']);
  }

  public send() {
    this.httpService.putUser(this.user.id, {
        id: this.user.id,
        firstname: this._userFormComponent.controls['firstname'].value,
        lastname: this._userFormComponent.controls['lastname'].value,
        address: this._userFormComponent.controls['address'].value,
        phone: this._userFormComponent.controls['phone'].value
    }).subscribe(data => {
        this.router.navigate(['/users']);
    });
  }

  public ngOnInit() {
    this.activateRoute.params.subscribe((params: {id: number}) => {
      this.httpService.getUser(params.id).subscribe(data => {
            this.user = data;
            setTimeout(() => { this._userFormComponent.profileForm.patchValue(this.user); }, 0);
        });
    });
  }

}
