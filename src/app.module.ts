import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), MovieModule],
})
export class AppModule {}
