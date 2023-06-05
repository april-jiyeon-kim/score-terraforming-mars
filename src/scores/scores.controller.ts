import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';

@Controller('scores')
export class ScoresController {
  @Get()
  getAll() {
    return 'This will return all ';
  }

  @Get('search')
  search(@Query('user') searchingUser: string) {
    return `We are searching for a score with a title ${searchingUser}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return one score ${id}`;
  }

  @Post()
  create(@Body() scoreData) {
    console.log(scoreData);
    return scoreData;
  }

  @Delete('/:id')
  remove(@Param('id') scoreId: string) {
    return `This will delete a score with the id ${scoreId}`;
  }

  @Patch('/:id')
  patch(@Param('id') scoreId: string, @Body() updatedData) {
    return { updatedScore: scoreId, ...updatedData };
  }
}
