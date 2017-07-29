import { Component } from '@angular/core';

import { SearchService } from "./search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  private loading: boolean = false;

  constructor(private itunes: SearchService) { }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(_ => this.loading = false);
  }
}
