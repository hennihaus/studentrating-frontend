import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReviewWrapper, GetProfBySubjectIdQuery, Title } from 'src/app/model/graphql-types';
import { ProfStoreService } from 'src/app/graphql/prof-store.service';
import { ReviewStoreService } from 'src/app/graphql/review-store.service';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {

  disabled = true;
  review$: Observable<ReviewWrapper>;
  prof$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private ps: ProfStoreService,
    private rs: ReviewStoreService
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    const subjectId = params.get('id');
    this.review$ = this.rs.getSingle(params.get('reviewId')).pipe(
      map(review => review as ReviewWrapper)
    );
    this.prof$ = this.ps.getSingleBySubjectId(subjectId).pipe(
      map(prof => {
        const subject: GetProfBySubjectIdQuery['getProfBySubjectId']['subjects'][0] = prof.subjects.find(s => s.id === subjectId);
        return `${subject.name} (${prof.title ? Title[prof.title] : ''} ${prof.firstName} ${prof.lastName})`;
      })
    );
  }

}
