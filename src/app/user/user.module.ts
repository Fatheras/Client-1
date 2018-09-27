import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list.component';
import { EditUserComponent } from './components/edit-user.component';
import { UserComponent } from './user.component';
import { UsersListItemComponent } from './components/users-list-item.component';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: UsersListComponent},
  { path: ':id', component: EditUserComponent}
];

@NgModule({
  declarations: [
    UserComponent,
    UsersListComponent,
    EditUserComponent,
    UsersListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [
      UserComponent
  ],
  providers: [],

})
export class UserModule { }
