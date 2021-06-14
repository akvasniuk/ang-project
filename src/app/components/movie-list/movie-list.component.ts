import {Component, Input, OnInit} from '@angular/core';
import {GenresService} from "../../service";
import {Genre, Movie} from "../../interface";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input()
  movie: Movie
  movieGenre: Genre[]

  constructor(private genresService: GenresService) {
  }

  ngOnInit(): void {
    this.genresService.getGenre(this.movie.genre_ids).subscribe((value: any) => {
        this.movieGenre = value.slice(0, 3)
      }
    )

  }

}
