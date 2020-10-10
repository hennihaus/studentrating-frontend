import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { GetProfsQuery } from '../model/graphql-types';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchTerm$ = new Subject<string>();
  profs: GetProfsQuery['getAllProfs'];

  constructor() { }

  profSearch(input: string): Observable<GetProfsQuery['getAllProfs']> {
    return of(this.profs.filter(prof => {
      return `${prof.title} ${prof.firstName} ${prof.lastName}`.toLowerCase().includes(input.toLowerCase());
    }));
  }

  subjectSearchByProf(input: string): GetProfsQuery['getAllProfs'] {
    return this.profs.filter(prof => {
      prof.subjects = prof.subjects.filter(subject => subject.name.toLowerCase().includes(input.toLowerCase()));
      return prof.subjects.find(subject => subject.name.toLowerCase().includes(input.toLowerCase()));
    });
  }

  subjectSearchBySubject(input: string, subjects: any[]): any[] {
    return subjects.filter(subject => subject.name.toLowerCase().includes(input.toLowerCase()));
  }
}
