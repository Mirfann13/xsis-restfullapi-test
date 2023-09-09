import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieService } from './movie.service';
export declare class MovieController {
    private movieService;
    constructor(movieService: MovieService);
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
    updateMovie(id: number, body: CreateMovieDto): Promise<string>;
    deleteMovie(id: number): Promise<string>;
}
