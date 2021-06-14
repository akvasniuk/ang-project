import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";


import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {
  AppComponent,
  HeaderComponent,
  MovieDetailsComponent, MovieListComponent,
  MoviesListComponent, PaginationComponent, PaginationMovieListComponent,
  PaginationMoviesListComponent
} from "./components";
import {CustomInterceptorService, MovieDetailsResolveService, PaginationResolveService} from "./service";


const routes: Routes = [
  {path: "", component: MoviesListComponent},
  {path: ":page", component: PaginationMoviesListComponent, resolve: {data: PaginationResolveService}},
  {path: ":page/:id", component: MovieDetailsComponent, resolve: {data: MovieDetailsResolveService}}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MovieListComponent,
    PaginationComponent,
    MovieDetailsComponent,
    PaginationMoviesListComponent,
    PaginationMovieListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
