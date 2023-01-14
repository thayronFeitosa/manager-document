import { Test, TestingModule } from '@nestjs/testing';
import { TypeDescriptionService } from './type_description.service';

describe('TypeDescriptionService', () => {
  let service: TypeDescriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeDescriptionService],
    }).compile();

    service = module.get<TypeDescriptionService>(TypeDescriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
