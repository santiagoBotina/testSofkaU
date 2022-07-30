import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpaceshipsModule } from './spaceships/spaceships.module';

@Module({
  imports: [
    //Importando módulo de Spaceships para que sea ejectudo en nustra aplicación
    SpaceshipsModule,
    //Seteando conexión a mongoDB
    MongooseModule.forRoot(
      'mongodb+srv://santiago:santiago@cluster0.9bgxj.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
