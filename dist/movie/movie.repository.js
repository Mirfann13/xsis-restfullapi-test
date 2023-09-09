"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const movie_entity_1 = require("./movie.entity");
const moment = require("moment");
let MovieRepository = class MovieRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger('MovieRepository');
    }
    async createMovie(body) {
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
            return insert;
        }
        catch (error) {
            this.logger.error("Failed to create Moive", error.stack);
            throw new common_1.InternalServerErrorException();
        }
    }
    async getMovie() {
        try {
            const query = await this.createQueryBuilder('movie')
                .getMany();
            let movieArr = [];
            for (const x of query) {
                const mv = {
                    id: x.id,
                    title: x.title,
                    description: x.description,
                    rating: x.rating,
                    image: x.image,
                    createdAt: moment(x.createdAt).format('YYYY-MM-DD HH:mm:ss'),
                    updatedAt: moment(x.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
                };
                movieArr.push(mv);
            }
            return movieArr;
        }
        catch (error) {
            this.logger.error("Failed to get movie", error.stack);
            throw new common_1.InternalServerErrorException();
        }
    }
    async getMovieById(id) {
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
                };
                return movie;
            }
        }
        catch (error) {
            this.logger.error("Failed to get movie by ID ", error.stack);
            throw new common_1.InternalServerErrorException();
        }
    }
    async updateMovie(body, id) {
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
        }
        catch (error) {
            this.logger.error("Failed to update movie", error.stack);
            throw new common_1.InternalServerErrorException();
        }
    }
    async deleteMovie(id) {
        try {
            const deleteMovie = await this.createQueryBuilder('movie')
                .delete()
                .where('movie.id = :id', { id: id })
                .execute();
            return deleteMovie;
        }
        catch (error) {
            this.logger.error("Failed to delete data movie", error.stack);
            throw new common_1.InternalServerErrorException();
        }
    }
};
MovieRepository = __decorate([
    typeorm_1.EntityRepository(movie_entity_1.Movie)
], MovieRepository);
exports.MovieRepository = MovieRepository;
//# sourceMappingURL=movie.repository.js.map