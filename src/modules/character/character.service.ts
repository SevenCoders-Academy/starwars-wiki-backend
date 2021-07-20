import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CharacterORM } from './character.entity';
import { CreateCharacterArgs } from './character.args';

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(CharacterORM)
    private characterRepository: Repository<CharacterORM>,
  ) {}

  async create(args: CreateCharacterArgs): Promise<CharacterORM> {
    return this.characterRepository.save(args);
  }

  async update(id: number, args: CreateCharacterArgs) {
    const film = await this.characterRepository.findOneOrFail(id);

    if (!film) {
      throw new NotFoundException('Film not found');
    }

    return this.characterRepository.update(id, args);
  }

  findAll(): Promise<CharacterORM[]> {
    return this.characterRepository.find();
  }

  findOne(id: number): Promise<CharacterORM> {
    return this.characterRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.characterRepository.delete(id);
  }
}
