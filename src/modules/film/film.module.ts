import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmORM } from './film.entity';
import { FilmsController } from './film.controller';
import { FilmService } from './film.service';

@Module({
  imports: [TypeOrmModule.forFeature([FilmORM])],
  controllers: [FilmsController],
  providers: [FilmService],
  exports: [FilmService],
})
export class FilmeModule {}
