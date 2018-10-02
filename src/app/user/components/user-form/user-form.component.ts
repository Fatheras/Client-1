import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

    @Output() sub: EventEmitter<FormGroup> = new EventEmitter();

    public submitted = false;

    public get controls() { return this.profileForm.controls; }

    public profileForm = new FormGroup({
        firstname: new FormControl('', [Validators.required]),
        lastname: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required])
      });

    public onSubmit() {

        this.submitted = true;

        if (this.profileForm.valid) {
            this.sub.emit();
        }
    }

    constructor() {

    }

    ngOnInit() {

    }
}
