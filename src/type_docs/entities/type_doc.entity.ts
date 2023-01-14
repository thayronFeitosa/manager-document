import { TypeDescription } from 'src/type_description/entities/type_description.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class TypeDoc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => TypeDescription, (des) => des.typeDocumentId2)
  description?: TypeDescription[];
}
