//Clase abstracta de una nave, esta misma será extendida por cada una de las clases de naves

export abstract class Spaceship {
  //Propiedades genéricas:
  name: string;
  weight: number;
  width: number;
  power: number;
  fuel: string;
  canTransport: boolean;
  speed: number;

  //Métodos genéricos
  create(): boolean {
    return true;
  }

  fly(): string {
    return 'Estoy volando';
  }

  constructor(
    name: string,
    weight: number,
    width: number,
    power: number,
    fuel: string,
    canTransport: boolean,
    speed: number,
  ) {
    this.name = name;
    this.weight = weight;
    this.width = width;
    this.power = power;
    this.fuel = fuel;
    this.canTransport = canTransport;
    this.speed = speed;
  }
}
