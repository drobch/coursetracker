import {Component, Input, OnInit} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {switchMap} from 'rxjs/operators';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';
import {Observable} from 'rxjs';
import {Course} from '../../shared/models/course.model';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit {

  course: Course;
  courseInfo$ = {};

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.authService.getCourse(this.route.snapshot.params['id'])
      .subscribe((course: Course) => {
        this.course = course;
      },
      err => {
        console.log(err);
        return false;
      });
  }

  gotoCourses() {
    this.router.navigate(['/courses']);
  }

}
