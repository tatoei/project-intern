import { Test, TestingModule } from '@nestjs/testing';
import { FactoryController } from './factory.controller';
import { FactoryModule } from './factory.module';
import { FactoryService } from './factory.service';

describe('FactoryController', () => {
  let controller: FactoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [FactoryModule], // Import the entire module
      controllers: [FactoryController],
      providers: [FactoryService]
    }).compile();

    controller = module.get<FactoryController>(FactoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
