import { Component, OnInit } from '@angular/core';
import { UserService} from './user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data: Object;

  constructor(private httpService: UserService) {

  }

  ngOnInit() {
      this.httpService.getUsers().subscribe(data => this.data = data);
  }
}
