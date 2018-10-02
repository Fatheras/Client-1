import { Component, OnInit } from '@angular/core';
import { UserService} from './services/user.service';

@Component({
  selector: 'app-info',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  constructor(private httpService: UserService) {

  }

  ngOnInit() {
  }
}
