import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DocumentDescriptionService } from './document_description.service';
import { CreateTypeDescriptionDto } from './dto/create-type_description.dto';
import { UpdateTypeDescriptionDto } from './dto/update-type_description.dto';

@Controller('document-description')
export class DocumentDescriptionController {
  constructor(
    private readonly documentDescriptionService: DocumentDescriptionService,
  ) {}

  @Post()
  create(@Body() createTypeDescriptionDto: CreateTypeDescriptionDto) {
    return this.documentDescriptionService.create(createTypeDescriptionDto);
  }

  @Get()
  findAll() {
    return this.documentDescriptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentDescriptionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypeDescriptionDto: UpdateTypeDescriptionDto,
  ) {
    return this.documentDescriptionService.update(
      +id,
      updateTypeDescriptionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentDescriptionService.remove(+id);
  }
}
