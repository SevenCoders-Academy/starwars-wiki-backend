import {
  Controller,
  Post,
  Body,
  Get,
  HttpCode,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterArgs } from './character.args';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get('/')
  @HttpCode(200)
  findAll() {
    return this.characterService.findAll();
  }

  @Get('/:id')
  @HttpCode(200)
  findOne(@Param('id') id: number) {
    return this.characterService.findOne(id);
  }

  @Put('/:id')
  @HttpCode(200)
  update(@Param('id') id: number, @Body() args: CreateCharacterArgs) {
    return this.characterService.update(id, args);
  }

  @Post('/')
  @HttpCode(201)
  create(@Body() args: CreateCharacterArgs) {
    return this.characterService.create(args);
  }

  @Delete('/:id')
  @HttpCode(200)
  delete(@Param('id') id: number) {
    return this.characterService.remove(id);
  }
}
