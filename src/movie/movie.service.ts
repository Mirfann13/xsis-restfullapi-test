import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieRepository)
    private movieRepository: MovieRepository,
  ) { }

  async getMovie() {
    return this.movieRepository.getMovie();
  }

  async getMovieById(id: number) {
    const find = await this.movieRepository.getMovieById(id);

    if (!find) {
      throw new NotFoundException(`Movie with ID "${id}" not found`);
    }

    return find;
  }

  async createMovie(body: CreateMovieDto) {
    const create = this.movieRepository.createMovie(body);

    if (create) {
      return 'succeed create movie'
    }
  }

  async updateMovie(body: CreateMovieDto, id: number) {
    const update = await this.movieRepository.updateMovie(body, id);

    if (update.affected === 0) {
      throw new NotFoundException(`Update Fail, Movie with ID "${id}" not found`);
    } else {
      return 'succeed update movie'
    }
  }

  async deleteMovie(id: number) {
    const result = await this.movieRepository.deleteMovie(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Delete Fail, Movie with ID "${id}" not found`);
    } else {
      return 'succeed delete movie';
    }
  }

}
