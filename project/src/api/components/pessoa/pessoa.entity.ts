import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pessoas')
export class Pessoa {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  cpf!: string;

  @Column()
  data_nascimento!: Date;

  @Column()
  data_efetivacao!: Date;

  @Column({
    /*type: 'decimal', 
    transformer: {
      to(value: any) { return value },
      from(value: any) { return parseFloat(value) }
    }*/
  })
  idade!: number;

  @Column({ 
    type: 'decimal',
    transformer: {
      to(value: any) { return value },
      from(value: any) { return parseFloat(value) }
    }
   })
  salario!: number;

  /*@Column()
  pago!: boolean;*/
}