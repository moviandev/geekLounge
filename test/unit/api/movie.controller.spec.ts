import { Test, TestingModule } from "@nestjs/testing";
import { MovieController } from '../../../src/api/controllers/movie.controller';
import { MovieService } from "../../../src/domain/services/movie.service";

describe("AppController", () => {
  let movieController: MovieController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [MovieService],
    }).compile();

    movieController = app.get<MovieController>(MovieController);
  });

  describe("root", () => {
    it('returns a empty list of movies"', () => {
      expect(movieController.create()).toBeUndefined();
    });
  });
});
