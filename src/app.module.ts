import { Module } from '@nestjs/common';
import { TypeDescriptionModule } from './document_description/document_description.module';
import { TypeDocsModule } from './type_docs/type_docs.module';

@Module({
  imports: [TypeDocsModule, TypeDescriptionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
