import {Router} from "express";

const router = Router();
/*Este endpoint responder a uma solicitação GET do "/desenvolvedor"
e retorna um obj json com as infromações correspondentes.
*/

router.get('/desenvolvedor', (req: any, res: any) => {
  const desenvolvedor = {
    name: 'Davi Musa Lobato',
    email: 'davimlobato7@gmail.com',
    github: 'https://github.com/Davi-Lobato'
  };
  res.json(desenvolvedor);
});

export default router;