import { Component } from '@angular/core';
import { Jsonp } from "@angular/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.scss']
})
export class ArtistTrackListComponent {
  private tracks: any[];

  constructor(private jsonp: Jsonp,
              private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params["artistId"]}&entity=song&callback=JSONP_CALLBACK`)
        .toPromise()
        .then(res => {
          console.log(res.json());
          this.tracks = res.json().results.slice(1);
        });
    });
  }
}
