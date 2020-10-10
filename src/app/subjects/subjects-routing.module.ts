import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { CreateReviewComponent } from './create-review/create-review.component';


const routes: Routes = [
  {
    path: '',
    component: SubjectListComponent
  },
  {
    path: ':id',
    component: SubjectDetailsComponent
  },
  {
    path: ':id/reviews/:reviewId',
    component: ReviewDetailComponent
  },
  {
    path: 'review/create',
    component: CreateReviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
