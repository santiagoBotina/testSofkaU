import { ILanzadera } from '../interfaces/lanzadera.interface';
import { Spaceship } from './spaceship.class';

export class Lanzadera extends Spaceship implements ILanzadera {
  constructor(
    name: string,
    weight: number,
    width: number,
    power: number,
    fuel: string,
    canTransport: boolean,
    speed: number,
  ) {
    super(name, weight, width, power, fuel, canTransport, speed); // must call super()
  }

  sendToSpaceAndBeyond(): string {
    const random: number = Math.round(Math.random() * 10000);
    return `The spaceship was sent ${random} kilometers away from us`;
  }

  toLand(): string {
    const random: number = Math.round(Math.random() * 10);
    if (random % 2 == 0) return `The spaceship was destroyed while landing :c`;
    else return `The spaceship landed successfully :D`;
  }
}
