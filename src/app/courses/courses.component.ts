import { Component, Output, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ICourse } from '../shared/models/Course';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @Output() course: ICourse;
  courses: ICourse[];

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.coursesService.
    getCourses().
    subscribe(
      data => this.courses = data,
      error => console.log(error)
    );
  }

  viewCourse(course) {
    this.router.navigate(['/courses', course.id]);
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
