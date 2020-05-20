import { Module } from "@nestjs/common";
import { MovieController } from "./api/controllers/movie.controller";
import { MovieService } from "./domain/services/movie.service";

@Module({
  imports: [],
  controllers: [MovieController],
  providers: [MovieService],
})
export class AppModule {}
