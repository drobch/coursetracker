import { Component, Input, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ICourse } from '../../shared/models/Course';
import { CoursesService } from '../../services/courses.service';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit {
  private subscription: Subscription;
  id: number;
  course$: Observable<ICourse>;
  courseInfo$ = {};

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.course$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.coursesService.getCourse(params.get('id')))
    );
    this.courseInfo$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.coursesService.getCourseDetail(params.get('id')))
    );
  }
  gotoCourses() {
    this.router.navigate(['/courses']);
  }

}
