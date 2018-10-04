import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from '../../users';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  animations: [
    trigger('openClosed', [
      state('open', style({
        visibility: 'visible',
        opacity: 1
      })),
      state('closed', style({
        visibility: 'hidden',
        opacity: 0,
        width: 0
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})

export class UserFormComponent implements OnInit {

    private _user: IUser;

    @Input() public set user(model: IUser) {
        if (model) {
            this.profileForm.patchValue(model);
        }
    }
    public get user() {
        this._user = {
            firstname: this.controls['firstname'].value,
            lastname: this.controls['lastname'].value,
            address: this.controls['address'].value,
            phone: this.controls['phone'].value
        };

        return this._user;
    }

    @Output() sub: EventEmitter<IUser> = new EventEmitter();

    public submitted = false;

    public get controls() { return this.profileForm.controls; }

    public profileForm = new FormGroup({
        firstname: new FormControl('', [Validators.required]),
        lastname: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required])
      });

    constructor() {

    }

    public onSubmit() {

        this.submitted = true;

        if (this.profileForm.valid) {
            this.sub.emit(this.user);
        }
    }

    public ngOnInit() {

    }
}
