const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors());
server.use(express.json());


server.post('/enviar', (req, res) => {
  const { cpf } = req.body;
  
  return res.json(cpf);
});


server.listen(3334, () => {
  console.log("API Envia Started!");
});
