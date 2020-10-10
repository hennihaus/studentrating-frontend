import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { GetAllSubjectsGQL, GetAllSubjectsQuery } from '../model/graphql-types';

@Injectable({
  providedIn: 'root'
})
export class SubjectStoreService {

  constructor(
    private getAllSubjectsGql: GetAllSubjectsGQL
  ) { }

  getAll(): Observable<GetAllSubjectsQuery['getAllSubjects']> {
    return this.getAllSubjectsGql.watch().valueChanges.pipe(
      retry(3),
      map(({ data }) => data.getAllSubjects),
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error(`Fehler aufgetren: ${error}`);
    return throwError(error);
  }
}
