
const Disorder = require('../models/disorder')
const{Op} = require('sequelize')
 
async function create_disorder(req, res){
    const {title, cid, content} = req.body
 
    if(!title || !cid || !content){
        return res.status(400).json({message: "Os campos title e cid são obrigatório"})
    }
 
    const odisorder = await Disorder.create({title, cid, content})
 
    return res.status(200).json({
        message: "Sucesso",
        disorder: odisorder
    })
}
 
 
async function show_disorder(req, res){
    const id = parseInt(req.params.id)
 
    const disorder = await Disorder.findByPk(id)
 
    if (!user){
        return res.status(404).json({
            message: "não encontrado"
        })
    }
 
    return res.status(202).json({
        message: "Encontrei",
        db: disorder  
    })
}
 
async function read_disorder(req, res){
    const {title} = req.query
 
    const condition = {}
 
    if(title){
        condition.title = {[Op.like]:`%${title}%`}
    }
 
 
    return res.status(200).json({
        message: "Sucesso", db: await Disorder.findAll({
            where: Object.keys(condition).length > 0?
            condition: undefined
 
        })
    })
}
 
async function update_disorder(req, res){
    const id = parseInt(req.params.id)
   const disorder = await Disorder.findByPk(id)
   const {title, cid} = req.body
 
 
    if (!disorder){
 
        return res.status(404).json({
 
        })
 
    }
 
    if(title) disorder.title = title
    if(cid) disorder.cid = cid
    if(content) disorder.content = content
 
    await disorder.save()
 
   return res.status(200).json ("atualizado")
}
 
async function delete_disorder(req, res){
    const id = parseInt(req.params.id)
    const disorder = await Disorder.findByPk(id)
    
    if(!disorder){
        return res.status(404).json("não encontrado")
    }
 
    await disorder.destroy()
 
    return res.status(201).json("foi de base")
}
 
module.exports = {
 
    create_disorder,
    read_disorder,
    update_disorder,
    delete_disorder,
    show_disorder
}