import { TypeDoc } from 'src/type_docs/entities/type_doc.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Index('idTypeDoc_FK', ['idTypeDoc'], {})
@Entity('document_description')
export class DocumentDescription {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  description: string;

  @Column()
  accountValue: string;

  @Column()
  firstDate: Date;

  @Column()
  endDate: Date;

  @Column()
  annex: string;

  @Column()
  idTypeDoc: number;

  @ManyToOne(() => TypeDoc, (typeDoc) => typeDoc.description)
  @JoinColumn([{ name: 'idTypeDoc', referencedColumnName: 'id' }])
  typeDocumentId2?: TypeDoc;
}
