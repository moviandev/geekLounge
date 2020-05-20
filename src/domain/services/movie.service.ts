import { Injectable } from '@nestjs/common';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {
  create(): Movie {
    return;
  }
}
