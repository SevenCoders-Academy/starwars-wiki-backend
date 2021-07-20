import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('characters')
export class CharacterORM {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  description: string;

  @Column()
  image_url: string;
}
