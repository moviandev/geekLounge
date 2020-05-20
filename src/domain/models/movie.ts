import { Genre } from "./genre";
import { Rating } from "./rating";

export class Movie {
  constructor(
    private readonly name: string,
    private readonly genre: Genre,
    private readonly rating: Rating,
    private readonly description: string,
    private readonly releaseDate: Date
  ) {}

  public getName() {
    return this.name;
  }
  public getGenre() {
    return this.genre;
  }
  public getRating() {
    return this.rating;
  }
  public getDescription() {
    return this.description;
  }
  public getReleaseDate() {
    return this.releaseDate;
  }
}
