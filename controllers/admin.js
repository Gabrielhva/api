const Admin = require('../models/admin')
const {Op, where} = require('sequelize')

async function create_admin(req, res){

    const {name,email,password, datanasc, crp, endereco, 
            telefone, desordem, foto, cnpj, nameclinic, cep, cidade, estado} = req.body

    if(!name || !email || !password ){
        return res.status(400).json({ message: "Você não preencheu algumas das opções: nome, email e senha!"})
    }

    if (! validateName(name)){
        return res.status(301).json({ message: "nome inválido, é preciso conter nome e sobrenome! "})
    }

    if (! validateEmail(email)) {
        return res.status(301).json({ message: "email inválido!"})
    } 

    if (! validatePassword(password)) {
        return res.status(301).json({ message: "A senha precisa conter um caracter especial(ex:$%#@!&) e um número!"})
    } 

    if (! validateCrp(crp)) {
        return res.status(301).json({ message: "O CRP precisa conter no máximo 7 dígitos!"})
    } 

    if (! validateDatanasc(datanasc)) {
        return res.status(301).json({ message: "A data de nascimento precisa conter dia/mês/ano!"})
    } 

    if (! validateEndereco(endereco)) {
        return res.status(301).json({ message: "O endereço precisa conter nome da rua e número do logradouro!"})
    } 

    if (! validateTelefone(telefone)) {
        return res.status(301).json({ message: "O telefone precisa estar completo!"})
    } 

    if (! validateDesordem(desordem)) {
        return res.status(301).json({ message: "A desordem precisa ser válida/existir!"})
    }
    
    if (! validateFoto(foto)) {
        return res.status(301).json({ message: "O tipo/formato da foto não se encaixa no padrão"})
    } 

    if (! validateCnpj(cnpj)) {
        return res.status(301).json({ message: "O CNPJ está incorreto ou não existe!"})
    } 

    if (! validateNameclinic(nameclinic)) {
        return res.status(301).json({ message: "O nome da clínica contém caracteres inválidos!"})
    } 

    if (! validateCep(cep)) {
        return res.status(301).json({ message: "O CEP está incorreto ou não existe!"})
    } 

    if (! validateCidade(cidade)) {
        return res.status(301).json({ message: "O nome da cidade possui caracteres inválidos!"})
    }
    
    if (! validateEstado(estado)) {
        return res.status(301).json({ message: "O nome do estado pode conter apenas 2 letras!"})
    } 


    const admin = await Admin.create({name, email, password, crp, datanasc, 
        endereco, telefone, desordem, foto, cnpj, nameclinic, cep, cidade, estado})

    return res.status(200).json({ message: "Sucesso!", admin: admin})
}

function validateName(name){
    var re = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/
    return re.test(name)
}

function validateEmail(email){
    var re = /\S+@\S+\.\S+/
    return re.test(email)
}  

function validatePassword(password){
    var re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z!@#$%;*(){}_+^&])(?!\1)){6,}$/
    return re.test(password)
}

function validateCrp(crp){
    var re = /^\d+\/\d{5}$/
    return re.test(crp)
}

function validateDatanasc(datanasc){
    var re = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    return re.test(datanasc)
}

function validateEndereco(endereco){
    var re = /^[a-zA-Záéíóúãõàâêôç\s]+,?\s?\d+([a-zA-Z]|\s?\d{1,3}[a-zA-Z])?$/
    return re.test(endereco)
}

function validateTelefone(telefone){
    var re = /^(?:\(\d{2}\)\s?|\d{2}\s?)?\d{5}-\d{4}$/
    return re.test(telefone)
}


function validateDesordem(desordem){
    var re = /^(Andiedade|Depressão|Esquizofrenia|Bipolaridade|Autismo|Borderline)$/i
    return re.test(desordem)
}

function validateFoto(foto){
    var re = /\.(jpg|jpeg|png|bmp|tiff|webp)$/i
    return re.test(foto)
}

function validateCnpj(cnpj){
    var re = /^\d{2}\.\d{3}\.\d{3}\/0001-\d{2}$/
    return re.test(cnpj)
}

function validateNameclinic(nameclinic){
    var re = /^[A-Za-zÁ-Úá-úçÇ0-9\s&.,-]+$/
    return re.test(nameclinic)
}

function validateCep(cep){
    var re = /^\d{5}-\d{3}$/
    return re.test(cep)
}

function validateCidade(cidade){
    var re = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/
    return re.test(cidade)
}

function validateEstado(estado){
    var re = /^[A-Za-z]{2}$/
    return re.test(estado)
}


async function show_admin(req, res) {
    const id = parseInt(req.params.id)
    const admin = await Admin.findByPk(id)

    if (!admin){
        return res.status(404).json({
            message: "Não encontrado"
        })
    }
    
    return res.status(202).json({
        message: "Encontrado!",
        db: admin
    })
}


async function read_admin(req, res){

    const {name} = req.query

    const condition = {}


    if(name){
        condition.name = {[Op.like]:`%${name}%`}
    }
    
    return res.status(200).json({
        message: 'sucesso',admin: await Admin.findAll({
            where: Object.keys(condition).length > 0?
            condition: undefined
        })
            
    })
}

async function update_admin(req, res){

    const {name,email,password, datanasc, crp, endereco, 
        telefone, desordem, foto, cnpj, nameclinic, cep, cidade, estado} = req.body

    const id = parseInt(req.params.id)
                    
    const admin = await Admin.findByPk(id)

    if (!admin){

        return res.status(404).json({
            message: "Não encontrado",
            db: null
        }) 

    }

    if(name) admin.name = name
    if(email) admin.email = email
    if(password) admin.password = password
    if(datanasc) admin.datanasc = datanasc
    if(crp) admin.crp = crp
    if(endereco) admin.endereco = endereco
    if(telefone) admin.telefone = telefone
    if(desordem) admin.desordem = desordem
    if(foto) admin.foto = foto
    if(cnpj) admin.cnpj = cnpj
    if(nameclinic) admin.nameclinic = nameclinic
    if(cep) admin.cep = cep
    if(cidade) admin.cidade = cidade
    if(estado) admin.estado = estado

    await admin.save()

    return  res.status(203).json({
        message: "atualizado",
        db: admin
    }) 
}

async function delete_admin(req, res){
    const id = parseInt(req.params.id)
    const admin = await Admin.findByPk(id)
    
    if (!admin) {
        return res.status(404).json("Não encontrado")
    }

    await admin.destroy()

    return res.status(201).json("Você foi de base XD")
    
}

module.exports = {
    create_admin,
    show_admin,
    read_admin,
    update_admin,
    delete_admin
}