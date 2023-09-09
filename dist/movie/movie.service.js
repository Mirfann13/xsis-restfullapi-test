"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const movie_repository_1 = require("./movie.repository");
let MovieService = class MovieService {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }
    async getMovie() {
        return this.movieRepository.getMovie();
    }
    async getMovieById(id) {
        const find = await this.movieRepository.getMovieById(id);
        if (!find) {
            throw new common_1.NotFoundException(`Movie with ID "${id}" not found`);
        }
        return find;
    }
    async createMovie(body) {
        const create = this.movieRepository.createMovie(body);
        if (create) {
            return 'succeed create movie';
        }
    }
    async updateMovie(body, id) {
        const update = await this.movieRepository.updateMovie(body, id);
        if (update.affected === 0) {
            throw new common_1.NotFoundException(`Update Fail, Movie with ID "${id}" not found`);
        }
        else {
            return 'succeed update movie';
        }
    }
    async deleteMovie(id) {
        const result = await this.movieRepository.deleteMovie(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Delete Fail, Movie with ID "${id}" not found`);
        }
        else {
            return 'succeed delete movie';
        }
    }
};
MovieService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(movie_repository_1.MovieRepository)),
    __metadata("design:paramtypes", [movie_repository_1.MovieRepository])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map