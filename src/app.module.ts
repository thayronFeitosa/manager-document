import { Module } from '@nestjs/common';
import { TypeDescriptionModule } from './document_description/document_description.module';
import { TypeDocsModule } from './type_docs/type_docs.module';
import { DocumentModule } from './document/document.module';

@Module({
  imports: [TypeDocsModule, TypeDescriptionModule, DocumentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
