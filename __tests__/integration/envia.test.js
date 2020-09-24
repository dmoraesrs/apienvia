import request from 'supertest';
import app from '../../src/app';

describe("Rota Teste", () => {
  it("Testando Chamada para teste", async () => {
    const response = await request(app).get("/teste");
    expect(response.statusCode).toBe(200);
  });
});

describe("Rota Validar", () => {
  it("Testando Requisição para Enviar", async () => {
    const response = await request(app).post("/enviar").send({
      cpf: '12345678909'
    });

    expect(response.statusCode).toBe(200);
  });
});
