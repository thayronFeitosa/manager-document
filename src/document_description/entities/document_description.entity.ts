import { TypeDoc } from 'src/type_docs/entities/type_doc.entity';
import { Document } from 'src/document/entities/document.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Index('idTypeDoc_FK', ['idTypeDoc'], {})
@Index('idDocument_FK', ['idDocument'], {})
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

  @Column()
  idDocument: number;

  @OneToOne(() => Document, (doc) => doc.id)
  @JoinColumn([{ name: 'idDocument', referencedColumnName: 'id' }])
  idDocument2: Document;
}
