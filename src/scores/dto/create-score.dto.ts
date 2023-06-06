import { IsString, IsNumber } from 'class-validator';

export class CreateScoreDto {
  @IsString()
  readonly userName: string;
  @IsNumber()
  readonly score: number;
}
