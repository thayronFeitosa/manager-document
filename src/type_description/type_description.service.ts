import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTypeDescriptionDto } from './dto/create-type_description.dto';
import { UpdateTypeDescriptionDto } from './dto/update-type_description.dto';
import { TypeDescription } from './entities/type_description.entity';

@Injectable()
export class TypeDescriptionService {
  constructor(
    @Inject('TYPE_DESCRIPTION_REPOSITORY')
    private repository: Repository<TypeDescription>,
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
}