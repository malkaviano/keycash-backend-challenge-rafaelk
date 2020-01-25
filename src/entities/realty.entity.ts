import { Entity, Index, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Realty {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Index({ unique: true })
  @Column({ length: '50' })
  register: string;

  @Column({ length: '50' })
  name: string;

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;

  @Column()
  parking: number;

  @Column('real')
  lotSize: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
