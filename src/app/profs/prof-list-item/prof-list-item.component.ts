import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GetProfsQuery, Title, Faculty } from 'src/app/model/graphql-types';

@Component({
  selector: 'app-prof-list-item',
  templateUrl: './prof-list-item.component.html',
  styleUrls: ['./prof-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfListItemComponent implements OnInit {
  @Input() prof: GetProfsQuery['getAllProfs'][0];
  @Input() thumbnailUrl: string;

  Title = Title;
  Faculty = Faculty;

  constructor() { }

  ngOnInit(): void {
  }
}
