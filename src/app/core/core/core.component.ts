import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/search.service';
import { Router, NavigationStart } from '@angular/router';

type ShowSearchBar = 'prof' | 'subject' | 'none';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  showSearchBar: ShowSearchBar = 'none';

  constructor(
    private searchService: SearchService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.router.url === '/profs') {
      this.showSearchBar = 'prof';
    }
    if (this.router.url === '/subjects') {
      this.showSearchBar = 'subject';
    }
    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        if (e.url === '/profs') {
          this.showSearchBar = 'prof';
        } else if (e.url === '/subjects') {
          this.showSearchBar = 'subject';
        } else {
          this.showSearchBar = 'none';
        }
      }
    });
  }

  search(input: string) {
    this.searchService.searchTerm$.next(input);
  }

}
