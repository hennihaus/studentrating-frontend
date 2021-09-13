import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetProfByIdQuery, Faculty, Campus, Day, Title } from 'src/app/model/graphql-types';
import { ProfStoreService } from 'src/app/graphql/prof-store.service';


@Component({
  selector: 'app-prof-details',
  templateUrl: './prof-details.component.html',
  styleUrls: ['./prof-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfDetailsComponent implements OnInit {
  prof$: Observable<GetProfByIdQuery['getProfById']>;
  thumbnailUrl: string;

  Title = Title;
  Faculty = Faculty;
  Campus = Campus;
  Day = Day;

  constructor(
    private profStoreService: ProfStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.prof$ = this.profStoreService.getSingle(params.get('id'));
    this.thumbnailUrl = params.get('thumbnailUrl');
  }

  removeProf() {
    this.prof$.subscribe(prof => {
      if (confirm(`${Title[prof.title]} ${prof.firstName} ${prof.lastName} wirklich löschen?`)) {
        this.profStoreService
          .remove(prof.id)
          .subscribe(() => this.router.navigateByUrl('/profs'));
      }
    });

  }
}
