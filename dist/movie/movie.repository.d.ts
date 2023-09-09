import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './movie.entity';
export declare class MovieRepository extends Repository<Movie> {
    private logger;
    createMovie(body: CreateMovieDto): Promise<import("typeorm").InsertResult>;
    getMovie(): Promise<any[]>;
    getMovieById(id: number): Promise<{
        id: number;
        title: string;
        description: string;
        rating: number;
        image: string;
        createdAt: string;
        updatedAt: string;
    }>;
    updateMovie(body: any, id: number): Promise<import("typeorm").UpdateResult>;
    deleteMovie(id: number): Promise<import("typeorm").DeleteResult>;
}
