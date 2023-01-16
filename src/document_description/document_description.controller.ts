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
import { unlink, unlinkSync } from 'fs';

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

    if (isAlreadyExist.urlPath) {
      unlinkSync(file.path);
      return new BadRequestException('File has already been uploaded');
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

  @Delete('file/:id')
  async removeFile(@Param('id') id: string) {
    const isAlreadyExist = await this.documentDescriptionService.findOne(+id);

    if (!isAlreadyExist || !isAlreadyExist.urlPath) {
      return new BadRequestException('File not found');
    }

    const deletedFile = await this.documentDescriptionService.deleteFile(+id);

    if (deletedFile) {
      const pathDocument = isAlreadyExist.urlPath;
      unlinkSync(pathDocument);
    }
    return deletedFile;
  }
}
