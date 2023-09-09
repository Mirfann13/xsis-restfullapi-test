import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description: string;

  @IsOptional()
  image: string;

  @IsNotEmpty()
  rating: number;

}
