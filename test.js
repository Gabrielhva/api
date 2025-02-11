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
});

//npm test