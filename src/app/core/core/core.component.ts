import {Component} from '@angular/core';
import {SearchService} from 'src/app/shared/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {

  constructor(
    private searchService: SearchService,
    public router: Router
  ) {
  }

  search(input: string) {
    this.searchService.searchTerm$.next(input);
  }

}
