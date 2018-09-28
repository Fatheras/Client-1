import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../http.service';
import { IUser } from '../users';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


enum Mode {
  CommonMode,
  UpdatedMode
}

@Component({
  selector: 'app-users-list-item',
  templateUrl: './users-list-item.component.html',
  styleUrls: ['users-list-item.component.css']
})
export class UsersListItemComponent implements OnInit {

  @Input() user: IUser;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  profileForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  });


  itemMode: String;

  constructor(private httpService: HttpService, private activateRoute: ActivatedRoute, private router: Router ) {

  }

  deleteUser() {

    this.httpService.deleteUser(this.user.id)
       .subscribe(() => {
          this.delete.emit();
          this.router.navigate(['']);
    });

  }

  cancel() {
    this.itemMode = 'commonMode';
  }

  editUser() {
    this.itemMode = 'editMode';

    this.profileForm.setValue(
      {
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      address: this.user.address,
      phone: this.user.phone
      }
    );
  }

  send() {
    this.httpService.putUser(this.user.id, {
      id: this.user.id,
      firstname: this.profileForm.controls['firstname'].value,
      lastname: this.profileForm.controls['lastname'].value,
      address: this.profileForm.controls['address'].value,
      phone: this.profileForm.controls['phone'].value
    }).subscribe((data) => {
      this.itemMode = 'commonMode';
      this.user = data;
    } );

  }

  ngOnInit() {
    this.itemMode = 'commonMode';

    this.activateRoute.params.subscribe((params: {id: number}) => {
      if (params.id) {
        this.httpService.getUser(params.id).subscribe(data => {
          this.user = data;
        });
      }
    });
  }

}
