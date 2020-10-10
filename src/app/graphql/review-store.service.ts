import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { CreateReviewGQL, CreateReviewMutation, ReviewWrapper, GetReviewByIdGQL, GetReviewByIdQuery } from '../model/graphql-types';

@Injectable({
  providedIn: 'root'
})
export class ReviewStoreService {

  constructor(
    private createReviewGql: CreateReviewGQL,
    private getReviewByIdGql: GetReviewByIdGQL
  ) { }

  createReview(review: ReviewWrapper): Observable<CreateReviewMutation['createReview']> {
    return this.createReviewGql.mutate({ review }).pipe(
      retry(3),
      map(({ data }) => data.createReview),
      catchError(this.errorHandler)
    );
  }

  getSingle(id: string): Observable<GetReviewByIdQuery['getReviewById']> {
    return this.getReviewByIdGql.watch({ id }).valueChanges.pipe(
      retry(3),
      map(({ data }) => data.getReviewById),
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error(`Fehler aufgetren: ${error}`);
    return throwError(error);
  }
}
