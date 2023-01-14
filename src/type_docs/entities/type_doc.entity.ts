import { DocumentDescription } from 'src/document_description/entities/document_description.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class TypeDoc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => DocumentDescription, (des) => des.typeDocumentId2)
  description?: DocumentDescription[];
}
