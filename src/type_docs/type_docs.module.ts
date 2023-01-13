import { forwardRef, Module } from '@nestjs/common';
import { TypeDocsService } from './type_docs.service';
import { TypeDocsController } from './type_docs.controller';
import { DatabaseModule } from '../infra/database/database.module';
import { typeDocsProviders } from './type_docs.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TypeDocsController],
  providers: [...typeDocsProviders, TypeDocsService],
  exports: [TypeDocsService],
})
export class TypeDocsModule {}
