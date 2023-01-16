import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { DocumentDescriptionService } from './document_description.service';
import { CreateTypeDescriptionDto } from './dto/create-type_description.dto';
import { UpdateTypeDescriptionDto } from './dto/update-type_description.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('document-description')
export class DocumentDescriptionController {
  constructor(
    private readonly documentDescriptionService: DocumentDescriptionService,
  ) {}
  @Post('upload/:id')
  @UseInterceptors(
    FileInterceptor('file', {
      preservePath: true,
      dest: `${__dirname}/../../temp`,
    }),
  )
  async addFile(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      return new BadRequestException('File not found');
    }

    if (!id) {
      return new NotFoundException();
    }
    const isAlreadyExist = await this.documentDescriptionService.findOne(+id);

    if (!isAlreadyExist) {
      return new NotFoundException();
    }

    const { path, originalname, size } = file;
    return this.documentDescriptionService.addFile(+id, {
      nameAnnex: originalname,
      sizeFile: size,
      urlPath: path,
    });
  }

  @Post()
  create(@Body() dataCreate: CreateTypeDescriptionDto) {
    return this.documentDescriptionService.create(dataCreate);
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
