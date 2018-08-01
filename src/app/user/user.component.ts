import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.model';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private selectedId: number;
  user: User;
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private userService: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUser(this.auth.currentUser.id).subscribe(
      data => this.user = data,
      error => console.log(error)
    );
  }
}
