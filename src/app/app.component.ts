import { Component, OnInit } from '@angular/core';
import { HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data: Object;

  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
      this.httpService.getUsers().subscribe(data => this.data = data);
  }
}
