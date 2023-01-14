import { IProvider, DataSource } from 'src/contracts/providers';
import { TypeDoc } from './entities/type_doc.entity';

export const typeDocsProviders: IProvider<TypeDoc>[] = [
  {
    provide: 'TYPE_DOCS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TypeDoc),
    inject: ['DATABASE_CONNECTION'],
  },
];
