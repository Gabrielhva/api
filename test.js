//npm install --save-dev jest supertest

const request = require('supertest');
const app = require('./api'); // Importa a aplicação

describe('Testes CRUD para API de Usuários', () => {
    let userId;

    it('Deve retornar que nome não existe', async () => {
        const res = await request(app)
            .post('/doctor/create')
            .send({
                email: 'teste@exemplo.com',
                senha: '123456',
                crp: '13333994',
                email: 'joaopaulo@gmail.com',
                desordem: 'Depressão' ,
                senha: '123456',
                nascimento: '03/03/1996',
                telefone: '16981350305',
                foto: ""
            });
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty( 'message', 'nome não existe');
    });

    it('Deve criar um usuário', async () => {
        const res = await request(app)
            .post('/doctor/create')
            .send({
                nome: 'Joao',
                email: 'teste@exemplo.com',
                senha: '123456',
                crp: '13333994',
                email: 'joaopaulo@gmail.com',
                desordem: 'Depressão' ,
                senha: '123456',
                nascimento: '03/03/1996',
                telefone: '16981350305',
                foto: ""
            });
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('doctor_create');
        userId = res.body.doctor_create.id;
    });
    

    it('Deve buscar todos os usuários', async () => {
        const res = await request(app)
            .get('/doctor/read')

        expect(res.status).toBe(200);
  
    });

    it('Deve buscar um usuário pelo ID', async () => {
        const res = await request(app)
            .get(`/doctor/show/${userId}`)
        expect(res.status).toBe(202);
    });

    it('Deve atualizar um usuário', async () => {
        const res = await request(app)
            .put(`/doctor/update/${userId}`)
            .send({
                nome: 'kk'
            });

        expect(res.status).toBe(200);
    });

    it('Deve deletar um usuário', async () => {
        const res = await request(app)
            .delete(`/doctor/del/${userId}`)

        expect(res.status).toBe(201);
    });

    it('deve ler o admin', async () => {
        const response = await request(app).get(`/admin/read`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('admin');
    });

    let adminId

    it('Deve criar um admin', async () => {
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

    it('Deve ler um admin específico', async () => {
        const response = await request(app).get(`/admin/read?name=Gabriel`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('admin');
    });


    it('Deve atualizar o admin', async () => {
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

    it('Deve deletar um admin', async () => {
        const response = await request(app).get(`/admin/del/${adminId}`);
        expect(response.status).toBe(404);
    });
});


//npm test