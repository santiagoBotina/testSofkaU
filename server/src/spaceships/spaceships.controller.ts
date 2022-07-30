import { Body, Controller, Get, Post } from '@nestjs/common';
import { Spaceship } from 'src/schemas/spaceship.schema';
import { CreateSpaceshipDto } from './dto/create-spaceship.dto';
import { SpaceshipsService } from './spaceships.service';

//Rutas para el manejo de naves
@Controller('spaceships')
export class SpaceshipsController {
  constructor(private readonly spaceshipsService: SpaceshipsService) {}

  //Devuelve todas las naves
  @Get()
  async getAll(): Promise<Spaceship[]> {
    return await this.spaceshipsService.getAll();
  }
  //Devuelve la nave creada
  @Post()
  async createOne(@Body() dto: CreateSpaceshipDto) {
    return await this.spaceshipsService.createOne(dto);
  }
}
