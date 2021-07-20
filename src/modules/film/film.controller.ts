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
import { FilmService } from './film.service';
import { CreateFilmArgs } from './film.args';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmService: FilmService) {}

  @Get('/')
  @HttpCode(200)
  findAll() {
    return this.filmService.findAll();
  }

  @Get('/:id')
  @HttpCode(200)
  findOne(@Param('id') id: number) {
    return this.filmService.findOne(id);
  }

  @Put('/:id')
  @HttpCode(200)
  update(@Param('id') id: number, @Body() args: CreateFilmArgs) {
    return this.filmService.update(id, args);
  }

  @Post('/')
  @HttpCode(201)
  create(@Body() args: CreateFilmArgs) {
    return this.filmService.create(args);
  }

  @Delete('/:id')
  @HttpCode(200)
  delete(@Param('id') id: number) {
    return this.filmService.remove(id);
  }
}
