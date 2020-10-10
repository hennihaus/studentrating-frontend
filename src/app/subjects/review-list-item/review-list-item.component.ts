import { Component, Input, OnInit } from '@angular/core';
import { GetProfBySubjectIdQuery } from 'src/app/model/graphql-types';

@Component({
  selector: 'app-review-list-item',
  templateUrl: './review-list-item.component.html',
  styleUrls: ['./review-list-item.component.css']
})
export class ReviewListItemComponent implements OnInit {

  @Input() subjectId: string;
  @Input() review: GetProfBySubjectIdQuery['getProfBySubjectId']['subjects'][0]['reviews'][0];

  constructor() { }

  ngOnInit() {
  }
}
