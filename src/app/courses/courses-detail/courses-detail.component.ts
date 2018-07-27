import { Component, Input, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ICourse } from '../../shared/models/Course';
import { CoursesService } from '../../services/courses.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit {

  @Input() course: ICourse;
  courseID: string;

  constructor(
    private coursesService: CoursesService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.courseID = route.snapshot.params['id'];
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }


 /* getCourses() {
    this.coursesService.
    getCourse().
    subscribe(
      data => this.course = data,
      error => console.log(error)
    );
  }*/
}
