import { Test, TestingModule } from '@nestjs/testing';
import { TypeDocsService } from './type_docs.service';

describe('TypeDocsService', () => {
  let service: TypeDocsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeDocsService],
    }).compile();

    service = module.get<TypeDocsService>(TypeDocsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
