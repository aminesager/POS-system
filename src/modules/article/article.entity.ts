import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("article")
export class Article {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("real")
  price!: number;

  @Column()
  category!: string;
}
