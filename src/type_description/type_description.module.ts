import { Module } from '@nestjs/common';
import { TypeDescriptionService } from './type_description.service';
import { TypeDescriptionController } from './type_description.controller';
import { typeDescriptionProviders } from './type_description.providers';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TypeDescriptionController],
  providers: [...typeDescriptionProviders, TypeDescriptionService],

  exports: [TypeDescriptionService],
})
export class TypeDescriptionModule {}
