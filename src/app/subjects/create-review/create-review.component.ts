import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetProfsQuery, ReviewWrapper, Title } from '../../model/graphql-types';
import { ProfStoreService } from 'src/app/graphql/prof-store.service';
import { ReviewStoreService } from 'src/app/graphql/review-store.service';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {

  disabled = false;
  profs$: Observable<GetProfsQuery['getAllProfs']>;

  constructor(
    private ps: ProfStoreService,
    private rs: ReviewStoreService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.profs$ = this.ps.getAll().pipe(
      map(profs => {
        const result = [];
        profs
          .forEach(prof => prof.subjects
            .forEach(subject => result.push({
              id: subject.id,
              name: `${subject.name} (${prof.title ? Title[prof.title] : ''} ${prof.firstName} ${prof.lastName})`
            })));
        return result;
      }),
    );
  }

  createReview(review: ReviewWrapper) {
    this.rs.createReview(review).subscribe(() => this.router.navigateByUrl('/home'));
  }

}
