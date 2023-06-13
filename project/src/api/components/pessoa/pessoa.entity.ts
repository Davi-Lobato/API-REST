import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pessoas')
export class Pessoa {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty({
    message: 'A propriedade cpf não pode ser vazia'
  })
  @Column()
  cpf!: string;

  @IsNotEmpty()
  @IsDateString({ strict: true })
  @Column()
  data_nascimento!: Date;

  @IsOptional()
  @IsDateString({ strict : true})
  @Column()
  data_efetivacao!: Date;

  @IsOptional()
  @IsNumber()
  @Column({
    /*type: 'decimal', 
    transformer: {
      to(value: any) { return value },
      from(value: any) { return parseFloat(value) }
    }*/
  })
  idade!: number;

  @IsNotEmpty({
    message: 'A propriedade salário não pode ser vazia'
  })
  @IsNumber()
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