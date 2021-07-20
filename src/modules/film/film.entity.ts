import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('films')
export class FilmORM {
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

  @Column()
  trailer_url: string;
}
