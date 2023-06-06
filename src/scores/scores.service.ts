import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ScoreEntity } from './entities/score.entity';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(ScoreEntity)
    private scoresRepositofy: Repository<ScoreEntity>,
  ) {}

  async create(score: ScoreEntity): Promise<ScoreEntity> {
    const newScore = this.scoresRepositofy.create(score);
    return await this.scoresRepositofy.save(newScore);
  }

  async findAll(): Promise<ScoreEntity[]> {
    return this.scoresRepositofy.find();
  }

  async findOne(id: number): Promise<ScoreEntity> {
    return await this.scoresRepositofy.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, score: ScoreEntity): Promise<number> {
    await this.scoresRepositofy.update(id, score);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.scoresRepositofy.delete(id);
    return id;
  }
}
