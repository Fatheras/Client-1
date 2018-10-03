import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './user.component';
import { UsersListItemComponent } from './components/users-list-item/users-list-item.component';


import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddItemComponent } from './components/add-item/add-item.component';
import { RequestErrorComponent } from './components/errors/request-error.component';
import { UserRoutingModule } from './routes/user-routing.module';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { UserFormComponent } from './components/user-form/user-form.component';


@NgModule({
  declarations: [
    UserComponent,
    UsersListComponent,
    RequestErrorComponent,
    AddItemComponent,
    EditItemComponent,
    UserFormComponent,
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
