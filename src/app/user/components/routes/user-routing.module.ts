import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from '../users-list/users-list.component';
import { UsersListItemComponent } from '../users-list-item/users-list-item.component';


const userRoutes: Routes = [
    { path: 'users', component: UsersListComponent},
    { path: 'user/:id', component: UsersListItemComponent},
 ];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule {}
