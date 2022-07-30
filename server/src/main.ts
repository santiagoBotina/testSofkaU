import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Activando CORS para poder hacer peticiones desde nuestro frontend
  app.enableCors();
  //Indicando a la app de que debe ignorar los campos que sean mandados por error desde el cliente si estos no están indicados en los esquemas
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3001);
}
bootstrap();
