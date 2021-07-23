import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('/')
  @HttpCode(200)
  findOne(@Query('query') query: string) {
    return this.searchService.find(query);
  }
}
