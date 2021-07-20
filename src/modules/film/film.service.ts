import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilmORM } from './film.entity';
import { CreateFilmArgs } from './film.args';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(FilmORM)
    private filmRepository: Repository<FilmORM>,
  ) {}

  async create(args: CreateFilmArgs): Promise<FilmORM> {
    return this.filmRepository.save(args);
  }

  async update(id: number, args: CreateFilmArgs) {
    const film = await this.filmRepository.findOneOrFail(id);

    if (!film) {
      throw new NotFoundException('Film not found');
    }

    return this.filmRepository.update(id, args);
  }

  findAll(): Promise<FilmORM[]> {
    return this.filmRepository.find();
  }

  findOne(id: number): Promise<FilmORM> {
    return this.filmRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.filmRepository.delete(id);
  }
}
