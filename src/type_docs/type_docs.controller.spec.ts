import { Test, TestingModule } from '@nestjs/testing';
import { TypeDocsController } from './type_docs.controller';
import { TypeDocsService } from './type_docs.service';

describe('TypeDocsController', () => {
  let controller: TypeDocsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeDocsController],
      providers: [TypeDocsService],
    }).compile();

    controller = module.get<TypeDocsController>(TypeDocsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
