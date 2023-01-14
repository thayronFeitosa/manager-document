import { DataSource, Repository } from 'typeorm';
import { TypeDescription } from './entities/type_description.entity';

interface IProvider<T> {
  provide: string;
  useFactory(dataSource: DataSource): Repository<T>;
  inject: string[];
}

export const typeDescriptionProviders = [
  {
    provide: 'TYPE_DESCRIPTION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TypeDescription),
    inject: ['DATABASE_CONNECTION'],
  },
];
