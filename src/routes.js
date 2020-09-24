import { Router} from 'express';

const routes = new Router();

routes.post('/enviar', (req, res) => {
  const { cpf } = req.body;

  return res.json(cpf);
});

routes.get('/teste', (req, res) => {
  const msg = 'API ENVIA - OK';

  return res.status(200).json({resposta: msg});
});

export default routes;
