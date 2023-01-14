import { Test, TestingModule } from '@nestjs/testing';
import { TypeDescriptionController } from './type_description.controller';
import { TypeDescriptionService } from './type_description.service';

describe('TypeDescriptionController', () => {
  let controller: TypeDescriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeDescriptionController],
      providers: [TypeDescriptionService],
    }).compile();

    controller = module.get<TypeDescriptionController>(
      TypeDescriptionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
