import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProfStoreService } from 'src/app/graphql/prof-store.service';
import { GetProfsQuery } from 'src/app/model/graphql-types';
import { SearchService } from 'src/app/shared/search.service';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-prof-list',
  templateUrl: './prof-list.component.html',
  styleUrls: ['./prof-list.component.css'],
})
export class ProfListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  profs$: Observable<GetProfsQuery['getAllProfs']>;

  constructor(
    private profStore: ProfStoreService,
    public searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.profs$ = this.profStore.getAll();
    this.profs$.pipe(takeUntil(this.destroy$)).subscribe(allProfs => this.searchService.profs = allProfs);
    this.searchService.searchTerm$.pipe(takeUntil(this.destroy$)).subscribe(searchTerm => {
      this.profs$ = this.searchService.profSearch(searchTerm);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

}
