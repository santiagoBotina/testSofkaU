import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Spaceship, SpaceshipSchema } from 'src/schemas/spaceship.schema';
import { SpaceshipsController } from './spaceships.controller';
import { SpaceshipsService } from './spaceships.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Spaceship.name, schema: SpaceshipSchema },
    ]),
  ],
  controllers: [SpaceshipsController],
  providers: [SpaceshipsService],
})
export class SpaceshipsModule {}
