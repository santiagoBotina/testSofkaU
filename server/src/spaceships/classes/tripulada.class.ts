import { ITripulada } from '../interfaces/tripulada.interface';
import { Spaceship } from './spaceship.class';

export class Tripulada extends Spaceship implements ITripulada {
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

  repair(): string {
    return `The spaceship has been repaired`;
  }

  investigate(): string {
    const random: number = Math.round(Math.random() * 10);
    if (random % 2 == 0) return `We've advanced in our investigations`;
    else return `The scientists are resting right now`;
  }
}
