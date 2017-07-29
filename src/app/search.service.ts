import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { SearchItem } from "./search-item";

@Injectable()
export class SearchService {
  apiRoot: string = "https://itunes.apple.com/search";
  results: SearchItem[];

  constructor(private jsonp: Jsonp) {
    this.results = [];
  }

  search(term: string) {
    return new Promise((resolve, reject) => {
      this.results = [];
      const apiUrl = `${this.apiRoot}?term=${term}&media=music&limit=20
        &callback=JSONP_CALLBACK`;
      this.jsonp.request(apiUrl)
        .toPromise()
        .then(
          res => { // Success
            this.results = res.json().results.map(item => {
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
              );
            });
            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
  }
}
