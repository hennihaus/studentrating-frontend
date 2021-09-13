import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { GetAllProfsSearchQuery, Title } from '../../model/graphql-types';
import { ProfStoreService } from 'src/app/graphql/prof-store.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  keyUp$ = new Subject<string>();
  isLoading$ = new BehaviorSubject<boolean>(false);
  profs$: Observable<GetAllProfsSearchQuery['getAllProfsSearch']>;

  Title = Title;

  constructor(
    private ps: ProfStoreService
  ) { }

  ngOnInit(): void {
    this.profs$ = this.keyUp$
      .pipe(
        filter(term => term.length >= 3),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => this.isLoading$.next(true)),
        switchMap(searchTerm => this.ps.getAllSearch(searchTerm)),
        tap(() => this.isLoading$.next(false))
      );
  }

}
