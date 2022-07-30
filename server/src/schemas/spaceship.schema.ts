import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//Esquema con la estructura de nuestro documento en mongoDB el cual se guradará en la base de datos
export type SpaceshipDocument = Spaceship & Document;

@Schema()
export class Spaceship {
  @Prop()
  name: string;

  @Prop()
  type?: string;

  @Prop()
  weight: number;

  @Prop()
  width: number;

  @Prop()
  power: number;

  @Prop()
  fuel: string;

  @Prop()
  canTransport: boolean;

  @Prop()
  speed: number;
}

export const SpaceshipSchema = SchemaFactory.createForClass(Spaceship);
