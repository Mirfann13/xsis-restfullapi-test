import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieRepository } from './movie.repository';
export declare class MovieService {
    private movieRepository;
    constructor(movieRepository: MovieRepository);
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
    createMovie(body: CreateMovieDto): Promise<string>;
    updateMovie(body: CreateMovieDto, id: number): Promise<string>;
    deleteMovie(id: number): Promise<string>;
}
