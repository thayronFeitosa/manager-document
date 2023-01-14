import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeDescriptionService } from './type_description.service';
import { CreateTypeDescriptionDto } from './dto/create-type_description.dto';
import { UpdateTypeDescriptionDto } from './dto/update-type_description.dto';

@Controller('type-description')
export class TypeDescriptionController {
  constructor(
    private readonly typeDescriptionService: TypeDescriptionService,
  ) {}

  @Post()
  create(@Body() createTypeDescriptionDto: CreateTypeDescriptionDto) {
    return this.typeDescriptionService.create(createTypeDescriptionDto);
  }

  @Get()
  findAll() {
    return this.typeDescriptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeDescriptionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypeDescriptionDto: UpdateTypeDescriptionDto,
  ) {
    return this.typeDescriptionService.update(+id, updateTypeDescriptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeDescriptionService.remove(+id);
  }
}
