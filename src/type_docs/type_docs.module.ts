import { Module } from '@nestjs/common';
import { TypeDocsService } from './type_docs.service';
import { TypeDocsController } from './type_docs.controller';

@Module({
  controllers: [TypeDocsController],
  providers: [TypeDocsService],
})
export class TypeDocsModule {}
