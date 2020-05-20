import { Rating } from "../../../src/domain/models/rating";
import { Genre } from "../../../src/domain/models/genre";
import { Movie } from "../../../src/domain/models/movie";

test("creates a movie instance", () => {
  const rating = new Rating('L');
  const movie = new Movie(
    "Chinatown",
    Genre.DRAMA,
    rating,
    "One of the better scripts of all time.",
    new Date()
  );

  expect(movie.getName()).toEqual("Chinatown");
  expect(movie.getGenre()).toEqual('drama');
});
