import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses/courses-detail/courses-detail.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  // { path: '', redirectTo: '/', pathMatch: 'full' },

  { path: 'account', component: NavbarComponent,
    children: [{path: '', component: UserComponent}]},

  { path: 'courses', component: NavbarComponent,
    children: [{path: '', component: CoursesComponent}]},

  { path: 'courses/:id', component: NavbarComponent,
    children: [{path: '', component: CoursesDetailComponent}]},

  { path: '**', redirectTo: '/courses', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
