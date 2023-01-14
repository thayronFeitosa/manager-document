import { IProvider, DataSource } from 'src/contracts/providers';
import { DocumentDescription } from './entities/document_description.entity';

export const typeDescriptionProviders: IProvider<DocumentDescription>[] = [
  {
    provide: 'DOCUMENT_DESCRIPTION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(DocumentDescription),
    inject: ['DATABASE_CONNECTION'],
  },
];
