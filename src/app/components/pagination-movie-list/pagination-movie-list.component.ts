import {Component, Input, OnInit} from '@angular/core';
import {GenresService} from "../../service";
import {Movie} from "../../interface";


@Component({
  selector: 'app-pagination-movie-list',
  templateUrl: './pagination-movie-list.component.html',
  styleUrls: ['./pagination-movie-list.component.css']
})
export class PaginationMovieListComponent implements OnInit {
  @Input()
  movie: Movie
  movieGenre: any[]

  constructor(private genresService: GenresService) {
  }

  ngOnInit(): void {
    this.genresService.getGenre(this.movie.genre_ids).subscribe((value: any) => {
      value.forEach((value: any) => this.movieGenre = value.name)
    })
  }

}
