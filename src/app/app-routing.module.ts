import { NgModule } from '@angular/core';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses/courses-detail/courses-detail.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardLogin } from './services/auth-guard-login.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '', redirectTo: '/courses', pathMatch: 'full' },

  { path: 'account', component: NavbarComponent,
    children: [{path: '', canActivate: [AuthGuardLogin], component: UserComponent}]},

  { path: 'courses', component: NavbarComponent,
    children: [{path: '', component: CoursesComponent}]},

  { path: 'courses/:id', component: NavbarComponent,
    children: [{path: '', component: CoursesDetailComponent}]},

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
