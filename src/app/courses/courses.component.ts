import { Component, Output, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Course } from '../shared/models/course.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses;
  favorites: Set<number> = new Set();

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.authService.getCourses().subscribe((courses) => {
          this.courses = courses;
        },
        err => {
          console.log(err);
          return false;
        });
  }

  addFav(i) {
    if (this.favorites.has(i)) {
      this.favorites.delete(i);
    } else {
      this.favorites.add(i);
    }
  }

/*
  addCourse() {
    this.coursesService.addCourse(this.addCoursesForm.value).subscribe(
      res => {
        this.courses.push(res);
        this.addCoursesForm.reset();
      },
      error => console.log(error)
    );
  }*/

}
