import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { concatAll, filter, map } from 'rxjs/operators';
import { GetProfBySubjectIdQuery, Title } from 'src/app/model/graphql-types';
import { ProfStoreService } from 'src/app/graphql/prof-store.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {

  prof$: Observable<GetProfBySubjectIdQuery['getProfBySubjectId']>;
  subject$: Observable<GetProfBySubjectIdQuery['getProfBySubjectId']['subjects'][0]>;

  Title = Title;

  constructor(
    private ps: ProfStoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    const request$ = this.ps.getSingleBySubjectId(params.get('id'));
    this.prof$ = request$;
    this.subject$ = request$.pipe(
      map(prof => prof.subjects),
      concatAll(),
      filter(subject => subject.id === params.get('id'))
    );
  }

}
