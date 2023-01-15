import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Document } from './entities/document.entity';
@Injectable()
export class DocumentService {
  constructor(
    @Inject('DOCUMENT_REPOSITORY')
    private repository: Repository<Document>,
  ) {}

  async create(createDocumentDto: CreateDocumentDto) {
    const create = this.repository.create(createDocumentDto);
    const isCreated = await this.repository.save(create);
    return isCreated;
  }

  findAll() {
    return `This action returns all document`;
  }

  findOne(id: number) {
    return `This action returns a #${id} document`;
  }

  update(id: number, updateDocumentDto: UpdateDocumentDto) {
    return `This action updates a #${id} document`;
  }

  remove(id: number) {
    return `This action removes a #${id} document`;
  }
}
