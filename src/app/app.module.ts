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

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "find", redirectTo: "search" },
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
