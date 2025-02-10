//npm install --save-dev jest supertest

const request = require('supertest');
const app = require('./api'); // Importa a aplicação

describe('Testando a API', () => {
    it('Deve retornar um JSON com status 200', async () => {
        const response = await request(app).get(`/admin/read`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('admin');
    });

    let adminId

    it('Deve retornar um JSON com status 200', async () => {
        const response = await request(app).post('/admin/create')
        .send({
            name: 'Gabriel Henrique',
            email: 'gabriel@gmail.com',
            password: 'ndadaoad6%',
            crp: '01/12345',
            datanasc: '01/01/2000',
            endereco: 'Rua abc, 123',
            telefone: '(16) 98107-9619',
            desordem: 'Bipolaridade',
            foto: 'aaa.jpg',
            cnpj: '11.111.111/0001-11',
            nameclinic: 'Clin',
            cep: '11111-111',
            cidade: 'São Carlos',
            estado:'SP'
        });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('admin');
        adminId = response.body.admin.id
    });

    it('Deve retornar um JSON com status 200', async () => {
        const response = await request(app).get(`/admin/read?name=Gabriel`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('admin');
    });


    it('Deve retornar um JSON com status 203', async () => {
        const response = await request(app).put(`/admin/update/${adminId}`)
        .send({
            name: 'Paulo',
            email: "paulo@gmail.com",
            crp: '00/12345',
            datanasc: '00/00/0000',
            endereco: 'Rua abc, 123',
            telefone: '(16) 11111-1111',
            desordem: 'Autismo',
            foto: '',
            cnpj: '22.222.222/0001-22',
            nameclinic: 'clinnn',
            cep: '22222-222',
            cidade: 'São Carlos', 
            estado:'São Paulo'
        })

        expect(response.status).toBe(203);
        expect(response.body).toHaveProperty('admin');
        expect(response.body).toHaveProperty('message', 'atualizado');
    });

    it('Deve retornar um JSON com status 201', async () => {
        const response = await request(app).get(`/admin/del/${adminId}`);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('admin');
    });
});

//npm test