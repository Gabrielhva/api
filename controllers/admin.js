const Admin = require('../models/admin')
const {Op, where} = require('sequelize')

async function create_admin(req, res){

    const {name,email,password} = req.body

    if(!name || !email || !password){
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

    const admin = await Admin.create({name, email, password})

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

    const {name,email,password} = req.body

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

    await admin.save()

    return {status: 203, msg: admin}
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