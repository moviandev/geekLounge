import { Controller, Post } from "@nestjs/common";
import { MovieService } from "../../domain/services/movie.service";
import { Movie } from "../../domain/models/movie";

@Controller('/v1/movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  create(): Movie {
    return this.movieService.create();
  }
}
