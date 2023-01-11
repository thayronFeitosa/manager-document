import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeDocsService } from './type_docs.service';
import { CreateTypeDocDto } from './dto/create-type_doc.dto';
import { UpdateTypeDocDto } from './dto/update-type_doc.dto';

@Controller('type-docs')
export class TypeDocsController {
  constructor(private readonly typeDocsService: TypeDocsService) {}

  @Post()
  create(@Body() createTypeDocDto: CreateTypeDocDto) {
    return this.typeDocsService.create(createTypeDocDto);
  }

  @Get()
  findAll() {
    return this.typeDocsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeDocsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeDocDto: UpdateTypeDocDto) {
    return this.typeDocsService.update(+id, updateTypeDocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeDocsService.remove(+id);
  }
}
