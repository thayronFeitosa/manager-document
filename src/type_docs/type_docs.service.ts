import { Injectable } from '@nestjs/common';
import { CreateTypeDocDto } from './dto/create-type_doc.dto';
import { UpdateTypeDocDto } from './dto/update-type_doc.dto';

@Injectable()
export class TypeDocsService {
  create(createTypeDocDto: CreateTypeDocDto) {
    return 'This action adds a new typeDoc';
  }

  findAll() {
    return `This action returns all typeDocs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeDoc`;
  }

  update(id: number, updateTypeDocDto: UpdateTypeDocDto) {
    return `This action updates a #${id} typeDoc`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeDoc`;
  }
}
