import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Spaceship, SpaceshipDocument } from 'src/schemas/spaceship.schema';
import { CreateSpaceshipDto } from './dto/create-spaceship.dto';

//Clase que contiene la lógica de las funciones invocadas en el controlador, asimismo tiene acceso a los métodos de los documentos de mongoDB
@Injectable()
export class SpaceshipsService {
  constructor(
    @InjectModel(Spaceship.name)
    private spaceshipModel: Model<SpaceshipDocument>,
  ) {}
  //Devuelve todas las naves
  async getAll(): Promise<Spaceship[]> {
    const spaceships: Spaceship[] = await this.spaceshipModel.find();
    return spaceships;
  }

  //Devuelve la nave creada con el ID asignado por mongoDB
  async createOne(dto: CreateSpaceshipDto): Promise<Spaceship> {
    const newDocument = new this.spaceshipModel(dto);
    if (dto.fuel == 'Petróleo refinado') {
      newDocument.type = 'Lanzadera';
    } else if (dto.fuel == 'Celdas fotovoltaicas') {
      newDocument.type = 'No tripulada';
    } else if (dto.fuel == 'Sólido' || dto.fuel == 'NO4 + UDMH') {
      newDocument.type = 'Tripulada';
    }
    return newDocument.save();
  }
}
