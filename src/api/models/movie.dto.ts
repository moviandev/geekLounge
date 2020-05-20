import { RatingDTO } from './rating.dto';

export class MovieDTO {
  constructor(
    private name: string,
    private genre: string,
    private rating: RatingDTO,
    private description: string,
    private releaseDate: Date
  ) {}
}
