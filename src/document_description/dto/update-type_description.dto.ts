import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeDescriptionDto } from './create-type_description.dto';

export class UpdateTypeDescriptionDto extends PartialType(
  CreateTypeDescriptionDto,
) {}
