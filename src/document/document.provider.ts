import { IProvider, DataSource } from 'src/contracts/providers';
import { Document } from './entities/document.entity';

export const documentProvider: IProvider<Document>[] = [
  {
    provide: 'DOCUMENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Document),
    inject: ['DATABASE_CONNECTION'],
  },
];
