import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../users';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable, throwError} from 'rxjs';
import { UserFormComponent } from '../user-form/user-form.component';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  @Input() user: IUser;

  public reqError;

  constructor(private httpService: UserService, private activateRoute: ActivatedRoute, private router: Router ) {

  }

  public cancel() {
    this.router.navigate(['/users']);
  }

  public send(model: IUser) {
    this.httpService.putUser(this.user.id, model).subscribe(data => {
        this.router.navigate(['/users']);
    });
  }


  public ngOnInit() {
    this.activateRoute.params.subscribe((params: {id: number}) => {
      this.httpService.getUser(params.id).subscribe(data => {
            this.user = data;
        }, (error) => {
          this.user = null;

          this.reqError = error;
          return throwError(error);
        });
    });
  }

}
