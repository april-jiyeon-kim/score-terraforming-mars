import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScoresController } from './scores/scores.controller';

@Module({
  imports: [],
  controllers: [AppController, ScoresController],
  providers: [AppService],
})
export class AppModule {}
