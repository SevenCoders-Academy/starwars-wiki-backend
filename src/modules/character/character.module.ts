import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterORM } from './character.entity';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterORM])],
  controllers: [CharacterController],
  providers: [CharacterService],
  exports: [CharacterService],
})
export class CharacterModule {}
