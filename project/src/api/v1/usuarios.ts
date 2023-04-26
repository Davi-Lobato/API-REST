import {Router} from "express";

const router = Router();

const usuarios = [
    {
        'id': '1',
        'nome': 'Aurelios Fornax Magus',
        'email': 'AureliosFM@gmail.com',
        'username': 'Aurelios',
        'senha': '123',
        'status': 'ativo'
    },
    {
        'id': '2',
        'nome': 'Sturdur Iron Mace',
        'email': 'sturdurIM@gmail.com',
        'username': 'Sturdur',
        'senha': '321',
        'status': 'desativado'
    }
];

/*GET retorna os usuários existentes no array `usuarios`, enquanto
POST adiciona uma novo usuário a array*/

router.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios);
});

router.post('/usuarios', (req, res) =>{
    const novo_usuario = {
        'id': req.body.id,
        'nome': req.body.nome,
        'email': req.body.email,
        'username': req.body.username,
        'senha': req.body.senha,
        'status': 'ativo'
    };
    usuarios.push(novo_usuario);
    res.status(201).json(novo_usuario);
})

router.put('/usuarios/:id', (req, res) =>{
    const id = '1'/*req.params.id*/;
    const index = usuarios.findIndex(usuario => usuario.id == id);
    
    /* operador spread `...`, assim é possível combinar
    os dados do usuário existente com os recebidos na 
    aquisição*/

    if (index !== -1) {
        const usuarioAtualizado = {
            ...usuarios[index],
            ...req.body
        };
        usuarios[index] = usuarioAtualizado;
        res.status(200).send("função update")
    } else {
        res.status(404).send('Usuário não encontrado');
    }
})

router.delete('/usuarios/:id', (req, res) => {
    const id = '1'/*req.params.id*/;
    const index = usuarios.findIndex(usuario => usuario.id == id);

/*Splice é um método que remove o usuário da array*/

    if (index !== -1) {
        usuarios.splice(index, 1);
        res.status(200).send('função destroy');
    } else {
        res.status(404).send('Usuário não encontrado');
    }
});
  
  
  
  
  
  
  
