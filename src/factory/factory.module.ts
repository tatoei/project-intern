import { Module } from '@nestjs/common';
import { FactoryService } from './factory.service';
import { FactoryController } from './factory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Factory, FactorySchema } from './schema/factory.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Factory.name, schema: FactorySchema }]),
    FactoryModule,
  ],
  providers: [FactoryService],
  controllers: [FactoryController],
  exports: [FactoryService],
})
export class FactoryModule {}
