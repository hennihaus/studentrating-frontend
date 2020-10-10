import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { GetProfByIdGQL, GetProfBySubjectIdGQL, GetProfsGQL, GetAllProfsSearchGQL, DeleteProfByIdGQL, GetProfByIdQuery, GetProfBySubjectIdQuery, GetProfsQuery, GetAllProfsSearchQuery } from '../model/graphql-types';



@Injectable({
  providedIn: 'root'
})
export class ProfStoreService {
  constructor(
    private getProfById: GetProfByIdGQL,
    private getProfBySubjectId: GetProfBySubjectIdGQL,
    private getProfs: GetProfsGQL,
    private getAllProfsSearch: GetAllProfsSearchGQL,
    private deleteProfById: DeleteProfByIdGQL
  ) {
  }

  getSingle(id: string): Observable<GetProfByIdQuery['getProfById']> {
    return this.getProfById.watch({ id }).valueChanges.pipe(
      retry(3),
      map(({ data }) => data.getProfById),
      catchError(this.errorHandler)
    );
  }

  getSingleBySubjectId(id: string): Observable<GetProfBySubjectIdQuery['getProfBySubjectId']> {
    return this.getProfBySubjectId.watch({ id }).valueChanges.pipe(
      retry(3),
      map(({ data }) => data.getProfBySubjectId),
      catchError(this.errorHandler)
    );
  }

  getAll(): Observable<GetProfsQuery['getAllProfs']> {
    return this.getProfs.watch().valueChanges.pipe(
      retry(3),
      map(({ data }) => data.getAllProfs),
      catchError(this.errorHandler)
    );
  }

  getAllSearch(searchTerm: string): Observable<GetAllProfsSearchQuery['getAllProfsSearch']> {
    return this.getAllProfsSearch.watch({ searchTerm }).valueChanges.pipe(
      retry(3),
      map(({ data }) => data.getAllProfsSearch),
      catchError(this.errorHandler)
    );
  }

  remove(id: string): Observable<any> {
    return this.deleteProfById.mutate({ id }).pipe(
      retry(3),
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error(`Fehler aufgetren: ${error}`);
    return throwError(error);
  }
}
