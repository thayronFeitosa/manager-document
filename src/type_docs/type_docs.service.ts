import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTypeDocDto } from './dto/create-type_doc.dto';
import { UpdateTypeDocDto } from './dto/update-type_doc.dto';
import { TypeDoc } from './entities/type_doc.entity';

@Injectable()
export class TypeDocsService {
  constructor(
    @Inject('TYPE_DOCS_REPOSITORY') private repository: Repository<TypeDoc>,
  ) {}
  async create(createTypeDocDto: CreateTypeDocDto) {
    const dto = this.repository.create(createTypeDocDto);
    const create = await this.repository.save(dto);
    return create;
  }

  async findAll() {
    const listAll = await this.repository.find();
    return listAll;
  }

  async findById(id: number) {
    const find = await this.repository.findOneBy({ id });
    return find;
  }

  async update(id: number, updateTypeDocDto: UpdateTypeDocDto) {
    const update = this.repository.update({ id }, updateTypeDocDto);
    return update;
  }

  async remove(id: number) {
    const deleted = await this.repository.delete(id);
    return deleted;
  }
}
