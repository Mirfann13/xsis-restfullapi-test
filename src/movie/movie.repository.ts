import { InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './movie.entity';
import moment = require('moment');

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {
  private logger = new Logger('MovieRepository');

  async createMovie(body: CreateMovieDto) {
    try {
      const insert = await this.createQueryBuilder('movie')
        .insert()
        .values({
          title: body.title,
          description: body.description,
          rating: body.rating,
          image: body.image,
          createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        })
        .execute();

      return insert

    } catch (error) {
      this.logger.error(
        "Failed to create Moive",
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }

  async getMovie() {
    try {
      const query = await this.createQueryBuilder('movie')
        .getMany();

      let movieArr = []
      for (const x of query) {
        const mv = {
          id: x.id,
          title: x.title,
          description: x.description,
          rating: x.rating,
          image: x.image,
          createdAt: moment(x.createdAt).format('YYYY-MM-DD HH:mm:ss'),
          updatedAt: moment(x.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
        }
        movieArr.push(mv);

      }
      return movieArr;

    } catch (error) {
      this.logger.error(
        "Failed to get movie",
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }


  async getMovieById(id: number) {
    try {
      const query = await this.createQueryBuilder('movie')
        .where('movie.id = :id', { id: id })
        .getOne();

      if (query) {
        const movie = {
          id: query.id,
          title: query.title,
          description: query.description,
          rating: query.rating,
          image: query.image,
          createdAt: moment(query.createdAt).format('YYYY-MM-DD HH:mm:ss'),
          updatedAt: moment(query.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
        }

        return movie;
      }

    } catch (error) {
      this.logger.error(
        "Failed to get movie by ID ",
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }

  async updateMovie(body: any, id: number) {
    try {
      const query = await this.createQueryBuilder('movie')
        .getOne();

      if (query) {
        const update = await this.createQueryBuilder('movie')
          .update()
          .set({
            title: body.title,
            description: body.description,
            rating: body.rating,
            image: body.image,
            createdAt: query.createdAt,
            updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
          })
          .where('movie.id = :id', { id: id })
          .execute();

        return update;
      }

    } catch (error) {
      this.logger.error(
        "Failed to update movie",
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }

  async deleteMovie(id: number) {
    try {
      const deleteMovie = await this.createQueryBuilder('movie')
        .delete()
        .where('movie.id = :id', { id: id })
        .execute();

      return deleteMovie

    } catch (error) {
      this.logger.error(
        "Failed to delete data movie",
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }

}
