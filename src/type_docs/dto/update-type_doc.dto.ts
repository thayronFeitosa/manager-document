import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeDocDto } from './create-type_doc.dto';

export class UpdateTypeDocDto extends PartialType(CreateTypeDocDto) {}
