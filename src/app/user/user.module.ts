import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list.component';
import { UserComponent } from './user.component';
import { UsersListItemComponent } from './components/users-list-item.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddItemComponent } from './components/add-item.component';

const appRoutes: Routes = [
  { path: '', component: UsersListComponent},
  { path: ':id', component: UsersListItemComponent}
];

@NgModule({
  declarations: [
    UserComponent,
    UsersListComponent,
    AddItemComponent,
    UsersListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [
      UserComponent
  ]

})
export class UserModule { }
