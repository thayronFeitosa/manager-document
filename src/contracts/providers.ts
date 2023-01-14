import { DataSource, Repository } from 'typeorm';

export interface IProvider<T> {
  provide: string;
  useFactory(dataSource: DataSource): Repository<T>;
  inject: string[];
}

export { Repository, DataSource };
