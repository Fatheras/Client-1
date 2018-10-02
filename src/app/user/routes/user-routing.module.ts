import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from '../components/users-list/users-list.component';
import { EditItemComponent } from '../components/edit-item/edit-item.component';


const userRoutes: Routes = [
    { path: 'users', component: UsersListComponent},
    { path: 'user/:id', component: EditItemComponent},
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
