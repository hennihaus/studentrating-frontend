import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ViewState } from 'src/app/model/presentation-types';
import { GetProfsQuery } from 'src/app/model/graphql-types';
import { ProfStoreService } from 'src/app/graphql/prof-store.service';
import { SearchService } from 'src/app/shared/search.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit, OnDestroy {

  @Input() viewState: ViewState = 'list';
  @Input() profs: GetProfsQuery['getAllProfs'];

  private destroy$ = new Subject();

  constructor(
    private ps: ProfStoreService,
    public searchService: SearchService
  ) { }

  ngOnInit() {
    if (!this.profs) {
      this.ps.getAll().subscribe(profs => {
        this.profs = profs;
        this.searchService.profs = profs;
      });
    } else {
      this.searchService.profs = this.profs;
    }
    this.searchService.searchTerm$.pipe(takeUntil(this.destroy$)).subscribe(searchTerm => {
      this.profs = this.searchService.subjectSearchByProf(searchTerm);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
