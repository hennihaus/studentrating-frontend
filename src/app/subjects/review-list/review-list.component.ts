import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { GetProfBySubjectIdQuery } from 'src/app/model/graphql-types';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewListComponent implements OnInit {

  @Input() subjectId: string;
  @Input() reviews: GetProfBySubjectIdQuery['getProfBySubjectId']['subjects'][0]['reviews'];

  constructor() { }

  ngOnInit() {
  }

  rating(value: number): number {
    return Math.round(value);
  }

}
