import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../../http.service';
import { IUser } from '../../users';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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


  submitted = false;

  itemMode: String;

  constructor(private httpService: HttpService, private activateRoute: ActivatedRoute, private router: Router ) {

  }

  get f() { return this.profileForm.controls; }

  public deleteUser() {

    this.httpService.deleteUser(this.user.id)
       .subscribe(() => {
          this.delete.emit();
    });

  }

  public editUser() {

    this.profileForm.setValue(
      {
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      address: this.user.address,
      phone: this.user.phone
      }
    );

    this.router.navigate([this.user.id]);
  }

  public cancel() {
    this.router.navigate(['']);
  }

  public send() {
    this.submitted = true;

    if (this.profileForm.valid) {
      this.httpService.putUser(this.user.id, {
        id: this.user.id,
        firstname: this.profileForm.controls['firstname'].value,
        lastname: this.profileForm.controls['lastname'].value,
        address: this.profileForm.controls['address'].value,
        phone: this.profileForm.controls['phone'].value
      }).subscribe((data) => {
        this.router.navigate(['']);
      } );
    }
  }

  ngOnInit() {
    this.itemMode = 'commonMode';

    this.activateRoute.params.subscribe((params: {id: number}) => {
      if (params.id) {
        this.itemMode = 'editMode';
        this.httpService.getUser(params.id).subscribe(data => {
          this.user = data;
          this.profileForm.setValue({
            firstname: this.user.firstname,
            lastname: this.user.lastname,
            address: this.user.address,
            phone: this.user.phone
          }
          );
        });
      }
    });
  }

}
