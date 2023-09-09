import { BaseEntity } from 'typeorm';
export declare class Movie extends BaseEntity {
    id: number;
    title: string;
    description: string;
    rating: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}
