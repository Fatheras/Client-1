import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '../../../http.service';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from '../../users';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent implements OnInit {

  public profileForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  });

  public submitted = false;

  constructor(private httpService: HttpService, private activateRoute: ActivatedRoute, private router: Router ) {

  }

  @Output() add: EventEmitter<IUser> = new EventEmitter();

  public get constrols() { return this.profileForm.controls; }

  public addUser() {

    this.submitted = true;

    if (this.profileForm.valid) {
      this.add.emit({
        firstname: this.profileForm.controls['firstname'].value,
        lastname: this.profileForm.controls['lastname'].value,
        address: this.profileForm.controls['address'].value,
        phone: this.profileForm.controls['phone'].value
      });
    }
  }

  public ngOnInit() {

  }

}
