import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { SearchService } from "./search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  private loading: boolean = false;

  constructor(private itunes:  SearchService,
              private route:   ActivatedRoute,
              private router:  Router) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params["term"]) {
        this.doSearch(params["term"]);
      }
    });
  }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(_ => this.loading = false);
  }

  onSearch(term: string) {
    this.router.navigate(["search", { term: term }]);
  }

  canDeactivate(): boolean {
    return this.itunes.results.length > 0;
  }
}
