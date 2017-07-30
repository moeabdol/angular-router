import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { JsonpModule } from "@angular/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { SearchComponent } from './search.component';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header.component';
import { SearchService } from "./search.service";
import { UserService } from "./user.service";
import { ArtistComponent } from './artist.component';
import { ArtistTrackListComponent } from './artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list.component';
import { AlwaysAuthGuard } from "./always-auth.guard";
import { OnlyLoggedInUserGuard } from "./only-logged-in-user.guard";
import { AlwaysAuthChildrenGuard } from "./always-auth-children.guard";
import { UnsearchedTermGuard } from "./unsearched-term.guard";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "find", redirectTo: "search" },
  { path: "home", component: HomeComponent },
  {
    path: "search",
    component: SearchComponent,
    canDeactivate: [UnsearchedTermGuard]
  },
  {
    path: "artist/:artistId",
    component: ArtistComponent,
    canActivate: [OnlyLoggedInUserGuard, AlwaysAuthGuard],
    canActivateChild: [AlwaysAuthChildrenGuard],
    children: [
      { path: "", redirectTo: "tracks", pathMatch: "full" },
      { path: "tracks", component: ArtistTrackListComponent },
      { path: "albums", component: ArtistAlbumListComponent }
    ]
  },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    HeaderComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    SearchService,
    AlwaysAuthGuard,
    OnlyLoggedInUserGuard,
    UserService,
    AlwaysAuthChildrenGuard,
    UnsearchedTermGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
