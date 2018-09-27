import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-info',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
  }
}
