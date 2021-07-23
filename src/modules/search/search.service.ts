import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { FilmORM } from '../film/film.entity';
import { CharacterORM } from '../character/character.entity';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(FilmORM)
    private filmRepository: Repository<FilmORM>,
    @InjectRepository(CharacterORM)
    private characterRepository: Repository<CharacterORM>,
  ) {}

  async find(query: string): Promise<any> {
    let films = await this.filmRepository
      .createQueryBuilder('film')
      .where('LOWER(film.title) like LOWER(:title)', { title: `%${query}%` })
      .orWhere('LOWER(film.subtitle) like LOWER(:subtitle)', {
        subtitle: `%${query}%`,
      })
      .getMany();

    let characteres = await this.characterRepository
      .createQueryBuilder('film')
      .where('LOWER(film.title) like LOWER(:title)', { title: `%${query}%` })
      .orWhere('LOWER(film.subtitle) like LOWER(:subtitle)', {
        subtitle: `%${query}%`,
      })
      .getMany();

    if (films.length > 0) {
      films = films.map((item) => ({ ...item, type: 'Filme' }));
    }

    if (characteres.length > 0) {
      characteres = characteres.map((item) => ({
        ...item,
        type: 'Personagem',
      }));
    }

    return [...films, ...characteres];
  }
}
