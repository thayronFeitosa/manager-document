import { DataSource } from 'typeorm';
import { TypeDoc } from './entities/type_doc.entity';

export const typeDocsProviders = [
  {
    provide: 'TYPE_DOCS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TypeDoc),
    inject: ['DATABASE_CONNECTION'],
  },
];
