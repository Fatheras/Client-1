import { Component, OnInit } from '@angular/core';
import { UserService} from './user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private httpService: UserService) {

  }

  public ngOnInit() {

  }
}
