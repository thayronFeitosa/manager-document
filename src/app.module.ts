import { Module } from '@nestjs/common';
import { TypeDocsModule } from './type_docs/type_docs.module';

@Module({
  imports: [TypeDocsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
