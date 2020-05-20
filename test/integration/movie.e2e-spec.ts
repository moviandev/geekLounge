import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { RatingDTO } from '../../src/api/models/rating.dto';
import { MovieDTO } from '../../src/api/models/movie.dto';

describe('MovieController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/v1/movies (POST)', () => {
    const rating = new RatingDTO('18');
    const movie = new MovieDTO(
      'Chinatown',
      'drama',
      rating,
      'One of the better scripts of all time.',
      new Date()
    );
    return request(app.getHttpServer())
      .post('/v1/movies')
      .send(movie)
      .expect(201);
  });
});
