import { Component, Input, OnInit } from '@angular/core';
import { ViewState } from 'src/app/model/presentation-types';
import { GetProfsQuery, Subject } from 'src/app/model/graphql-types';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-subject-list-item',
  templateUrl: './subject-list-item.component.html',
  styleUrls: ['./subject-list-item.component.css']
})
export class SubjectListItemComponent implements OnInit {
  @Input() viewState: ViewState;
  @Input() prof: GetProfsQuery['getAllProfs'][0];
  @Input() subject: Subject;
  Title = Title;

  constructor() { }

  ngOnInit() {
  }

}
