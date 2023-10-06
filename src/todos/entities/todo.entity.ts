import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todos {
  @Column()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  isDone: boolean;
}
