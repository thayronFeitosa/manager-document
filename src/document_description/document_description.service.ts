import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  CreateTypeDescriptionDto,
  DocumentDto,
} from './dto/create-type_description.dto';
import { UpdateTypeDescriptionDto } from './dto/update-type_description.dto';
import { DocumentDescription } from './entities/document_description.entity';

@Injectable()
export class DocumentDescriptionService {
  constructor(
    @Inject('DOCUMENT_DESCRIPTION_REPOSITORY')
    private repository: Repository<DocumentDescription>,
  ) {}
  async create(createTypeDescriptionDto: CreateTypeDescriptionDto) {
    const dtoCreate = this.repository.create(createTypeDescriptionDto);
    const created = await this.repository.save(dtoCreate);
    return created;
  }

  async findAll() {
    const list = await this.repository.find({
      relations: {
        typeDocumentId2: true,
      },
    });
    return list;
  }

  async findOne(id: number) {
    const findById = await this.repository.findOneBy({ id });
    return findById;
  }

  async update(id: number, updateTypeDescriptionDto: UpdateTypeDescriptionDto) {
    const update = await this.repository.update(
      { id },
      updateTypeDescriptionDto,
    );
    return update;
  }

  async remove(id: number) {
    const remove = await this.repository.delete({ id });
    return remove;
  }

  async addFile(id: number, dataDocument: DocumentDto) {
    const update = await this.repository.update({ id }, dataDocument);
    return update;
  }

  async deleteFile(id: number): Promise<boolean> {
    const update = await this.repository.update(
      { id },
      {
        nameAnnex: null,
        urlPath: null,
        sizeFile: 0,
      },
    );
    return update.affected > 0 ? true : false;
  }
}
