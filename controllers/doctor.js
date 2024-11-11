const Doctor = require('../models/doctor')
const {Op} = require('sequelize')




async function create_doctor(req,res) {
   const {name, crp, classificacao} = req.body
   if(!name || !crp){
       return res.status(400).json({ message: 'preencha os campos name e crp são obrigatorios, o campo classificação é opcional' });
   }


   if (! alteraTexto(name)){
       return res.status(404).json({ mensage:'o campo name deve ser apenas texto'})
   }
      
   const doctor = await Doctor.create ({name, crp, classificacao})


   return res.status(200).json({
       mensage:'sucesso',
       doctor_create: doctor
   })
}


async function show_doctor (req,res) {
   const id = parseInt(req.params.id)


   const doctor = await Doctor.findByPk(id)
   if(!doctor){
       return res.status(404).json({
           message: "Não Encontrado"
       })
   }


   return res.status(202).json({
       message:"Encontrei",
       db: doctor


   })


}


async function read_doctor(req,res){
   const {name} = req.query


   const condition = {}


   if(name){


       condition.name = {[Op.like]:`%${name}%`}
   }


   return res.status(200).json({
       message: 'Sucesso',
       lista: await Doctor.findAll({
           where: Object.keys(condition).length > 0?
           condition : undefined
       })
   })
}


function alteraTexto(inputtxt){
  var letters = /^[A-Za-z]+$/;
  return inputtxt.match(letters)


}
  
  
  
async function update_doctor (req,res){
   const id = parseInt(req.params.id)


   const {name, crp, classificacao} = req.body


   const doctor = await Doctor.findByPk(id)


   if(!doctor){
  
       return res.status(404).json("Não econtrado")
   }
  


   if(name) doctor.name = name
   if(crp) doctor.crp = crp
   if(classificacao) doctor.classificacao = classificacao


   await doctor.save()


   return res.status(200).json("doctor")
}


async function delete_doctor(req,res){
   const id = parseInt(req.params.id)
   const doctor = await Doctor.findByPk(id)
  
  
   if(!doctor){
       return res.status(404).json("Não foi encontrado")
    
   }
   await doctor.destroy()


   return res.status(201).json("Foi de base")
}
module.exports = {


   create_doctor,
   read_doctor,
   update_doctor,
   delete_doctor,
   show_doctor
}
