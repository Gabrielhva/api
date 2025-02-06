//npm install --save-dev jest supertest

const request = require('supertest');
const app = require('./api'); // Importa a aplicação

describe('Testando a API', () => {
    it('Deve retornar um JSON com status 200', async () => {
        const response = await request(app).get('/admin/read');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('admin');
    });
});

describe('Testando a API', () => {
    it('Deve retornar um JSON com status 200', async () => {
        const response = await request(app).post('/admin/create');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('admin');
    });
});

//npm test