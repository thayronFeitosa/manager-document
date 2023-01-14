import { Module } from '@nestjs/common';
import { DocumentDescriptionService } from './document_description.service';
import { DocumentDescriptionController } from './document_description.controller';
import { typeDescriptionProviders } from './document_description.providers';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DocumentDescriptionController],
  providers: [...typeDescriptionProviders, DocumentDescriptionService],

  exports: [DocumentDescriptionService],
})
export class TypeDescriptionModule {}
