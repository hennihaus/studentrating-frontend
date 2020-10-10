import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetProfsQuery, ReviewWrapper } from 'src/app/model/graphql-types';
import { ReviewFactory } from 'src/app/model/review-factory';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewFormComponent implements OnInit {
  @Input() profs: GetProfsQuery['getAllProfs'] | string;
  @Input() disabled: boolean;
  @Input() review: ReviewWrapper = ReviewFactory.empty();
  @Output() submitReview = new EventEmitter<ReviewWrapper>();
  @ViewChild('reviewForm', {static: false}) reviewForm: NgForm;

  constructor() { }

  ngOnInit(): void {
    if (this.disabled) {
      this.review.id = this.profs as string;
    }
  }

  submitForm() {
    this.submitReview.emit(this.review);

    this.review = ReviewFactory.empty();
    this.reviewForm.reset();
  }

}
