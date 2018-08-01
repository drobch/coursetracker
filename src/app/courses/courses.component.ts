import { Component, Output, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Course } from '../shared/models/course.model';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  private selectedId: number;
  courses$: Observable<Course[]>;
  favorites: Set<number> = new Set();

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.courses$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.coursesService.getCourses();
      })
    );
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
