import { Module } from '@nestjs/common';
import { DocumentDescriptionService } from './document_description.service';
import { DocumentDescriptionController } from './document_description.controller';
import { typeDescriptionProviders } from './document_description.providers';
import { DatabaseModule } from 'src/infra/database/database.module';
import { TypeDocsModule } from 'src/type_docs/type_docs.module';

@Module({
  imports: [DatabaseModule, TypeDocsModule],
  controllers: [DocumentDescriptionController],
  providers: [...typeDescriptionProviders, DocumentDescriptionService],

  exports: [DocumentDescriptionService],
})
export class TypeDescriptionModule {}
