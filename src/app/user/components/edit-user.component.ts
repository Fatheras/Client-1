import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService} from '../../http.service';
import { ActivatedRoute} from '@angular/router';
import { IUser } from '../users';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
})
export class EditUserComponent implements OnInit {

  @Input() user: IUser;

  constructor(private httpService: HttpService, private activateRoute: ActivatedRoute) {

  }

  @Output() delete: EventEmitter<any> = new EventEmitter();

  public onDelete(id: number) {

    this.delete.emit(id);

    // this.httpService.deleteUser(id)
    //   .subscribe(() => {
    //     this.getUsers();
    //   });
  }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: {id: number}) => {
      this.httpService.getUser(params.id).subscribe(data => {this.user = data; });
    });
  }
}
