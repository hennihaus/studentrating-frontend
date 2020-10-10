import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewListItemComponent } from './review-list-item/review-list-item.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { SubjectListItemComponent } from './subject-list-item/subject-list-item.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { FormMessagesComponent } from './form-messages/form-messages.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ReviewDetailComponent,
    ReviewListComponent,
    ReviewListItemComponent,
    SubjectDetailsComponent,
    SubjectListComponent,
    SubjectListItemComponent,
    CreateReviewComponent,
    FormMessagesComponent,
    ReviewFormComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    SharedModule,
  ],
  exports: [
    SubjectListComponent
  ]
})
export class SubjectsModule { }
