import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProjectComponent } from './Components/project/project.component';
import { UsersComponent } from './Components/users/users.component';
import { ErrorComponent } from './Components/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'projects',
    component: ProjectComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },{
    path: '**',
    component: ErrorComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
