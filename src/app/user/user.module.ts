import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './user.component';
import { UsersListItemComponent } from './components/users-list-item/users-list-item.component';


import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddItemComponent } from './components/add-item/add-item.component';
import { NotFoundComponent } from './components/errors/notfound.component';
import { UserRoutingModule } from './components/routes/user-routing.module';


@NgModule({
  declarations: [
    UserComponent,
    UsersListComponent,
    NotFoundComponent,
    AddItemComponent,
    UsersListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserRoutingModule,
    FormsModule,
    CommonModule
  ],
  exports: [
      UserComponent
  ]

})
export class UserModule { }
