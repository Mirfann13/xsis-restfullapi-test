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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const typeorm_1 = require("typeorm");
let Movie = class Movie extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'id' }),
    __metadata("design:type", Number)
], Movie.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'title' }),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ name: 'description' }),
    __metadata("design:type", String)
], Movie.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: 'rating' }),
    __metadata("design:type", Number)
], Movie.prototype, "rating", void 0);
__decorate([
    typeorm_1.Column({ name: 'image' }),
    __metadata("design:type", String)
], Movie.prototype, "image", void 0);
__decorate([
    typeorm_1.Column({ name: 'created_at' }),
    __metadata("design:type", Date)
], Movie.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Movie.prototype, "updatedAt", void 0);
Movie = __decorate([
    typeorm_1.Entity('movie')
], Movie);
exports.Movie = Movie;
//# sourceMappingURL=movie.entity.js.map