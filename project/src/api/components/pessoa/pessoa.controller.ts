import { application, Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Pessoa } from './pessoa.entity';

export class PessoaController{

    public async list(req: Request, res: Response){
        const pessoas = await AppDataSource.manager.find(Pessoa)

        return res.status(200).json({dados: pessoas, total: pessoas.length});
    }

    public async create(req: Request, res: Response) {
        let { cpf, data_nascimento, data_efetivacao, idade, salario} = req.body;
        let pes = new Pessoa();
        pes.cpf = cpf;
        pes.data_nascimento = data_nascimento;
        pes.data_efetivacao = data_efetivacao;
        pes.idade = idade;
        pes.salario = salario;

        const _pessoa = await AppDataSource.manager.save(pes);

        return res.status(201).json(_pessoa);
    }

    public async update(req: Request, res: Response){
        const { cod } = req.params;

        const pessoa = await AppDataSource.manager.findOneBy(Pessoa, { id:cod });
        
        if (pessoa == null){
            return res.status(404).json({erro: 'Pessoa não encontrada!' });
        }

        let { cpf, data_nascimento, data_efetivacao, idade, salario} = req.body;
        
        pessoa.cpf = cpf;
        pessoa.data_nascimento = data_nascimento;
        pessoa.data_efetivacao = data_efetivacao;
        pessoa.idade = idade;
        pessoa.salario = salario;

        const pessoa_salva = await AppDataSource.manager.save(pessoa);
        return res.json(pessoa_salva);
    }

    public async destroy(req: Request, res: Response){
        const { cod } = req.params;

        const pessoa = await AppDataSource.manager.findOneBy(Pessoa, { id:cod });
        
        if (pessoa == null) {
            return res.status(404).json({ erro: "Pessoa não encontrada!" });
        }

        await AppDataSource.manager.delete(Pessoa, pessoa);

        return res.status(204).json();
    }

    public async show(req: Request, res: Response){
        const { cod } = req.params;

        const pessoa = await AppDataSource.manager.findOneBy(Pessoa, { id:cod });

        if (pessoa == null) {
            return res.status(404).json({ erro: 'Pessoa não encontrada!' });
        }

        return res.json(pessoa);
    }
}