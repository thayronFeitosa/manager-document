import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { DatabaseModule } from 'src/infra/database/database.module';
import { documentProvider } from './document.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [DocumentController],
  providers: [...documentProvider, DocumentService],
})
export class DocumentModule {}
