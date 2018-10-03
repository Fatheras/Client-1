import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestErrorComponent } from './user/components/errors/request-error.component';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: RequestErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
