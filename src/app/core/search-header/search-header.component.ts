import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent implements OnInit {
  @Input() placeholder: string;
  @Output() searchEvent = new EventEmitter<string>();
  keyUp$ = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.keyUp$.subscribe(searchTerm => this.searchEvent.emit(searchTerm));
  }

}
