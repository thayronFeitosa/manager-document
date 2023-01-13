import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TypeDoc {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;
}
