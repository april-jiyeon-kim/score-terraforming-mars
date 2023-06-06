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
import { ScoresService } from './scores.service';
import { ScoreEntity } from './entities/score.entity';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post()
  async create(@Body() score: ScoreEntity): Promise<ScoreEntity> {
    return await this.scoresService.create(score);
  }

  @Get()
  async findAll(): Promise<ScoreEntity[]> {
    return this.scoresService.findAll();
  }

  @Get('search')
  search(@Query('user') searchingUser: string) {
    return `We are searching for a score with a title ${searchingUser}`;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ScoreEntity> {
    return this.scoresService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.scoresService.remove(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() score: ScoreEntity,
  ): Promise<number> {
    return this.scoresService.update(+id, score);
  }
}
