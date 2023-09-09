import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) { }

  @Get()
  getMovie() {
    return this.movieService.getMovie();
  }

  @Get(':ID')
  getMovieById(@Param('ID', ParseIntPipe) id: number) {
    return this.movieService.getMovieById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createMovie(@Body() body: CreateMovieDto) {
    return this.movieService.createMovie(body);
  }

  @Patch(':ID')
  updateMovie(@Param('ID', ParseIntPipe) id: number, @Body() body: CreateMovieDto) {
    return this.movieService.updateMovie(body, id);
  }

  @Delete(':ID')
  deleteMovie(@Param('ID', ParseIntPipe) id: number) {
    return this.movieService.deleteMovie(id);
  }

}
