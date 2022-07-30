import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateSpaceshipDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @IsNotEmpty()
  @IsNumber()
  width: number;

  @IsNotEmpty()
  @IsNumber()
  power: number;

  @IsNotEmpty()
  @IsString()
  fuel: string;

  @IsNotEmpty()
  canTransport: boolean;

  @IsNotEmpty()
  @IsNumber()
  speed: number;
}
