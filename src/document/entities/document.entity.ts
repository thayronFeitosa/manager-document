import { DocumentDescription } from 'src/document_description/entities/document_description.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  @OneToOne(() => DocumentDescription, (description) => description.idDocument)
  id: number;

  @Column()
  nameAnnex: string;

  @Column()
  sizeFile: number;

  @Column()
  urlPath: string;
}
