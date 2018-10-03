import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-request-error',
  templateUrl: './request-error.component.html'
})

export class RequestErrorComponent implements OnInit {

    @Input() status: string;
    @Input() description: string;

    constructor() {

    }

    public ngOnInit() {

    }
}
