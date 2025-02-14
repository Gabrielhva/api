const Doctor = require ('../models/doctor')
const {Op} = require('sequelize')




async function create_doctor(req,res) {
    const {nome, crp, desordem, email, senha, nascimento, telefone, foto, nomeClinica, cnpj,  endereço, 
        estado,cidade, cep} = req.body


   if(!nome) return res.status(400).json({ message: 'nome não existe' }) 
   if(!crp) return res.status(400).json({ message: 'crp não existe' })
   if(!desordem) return res.status(400).json({ message: ' especialização não existe' })
   if(!email) return res.status(400).json({ message: ' email não existe' })
   if(!senha) return res.status(400).json({ message: ' senha incorreta' })
   if(!nascimento) return res.status(400).json({ message: 'data de nascimento incorreta' })
   if(!telefone) return res.status(400).json({ message: 'bliririm, bliririm, alguem  ligou pra mim' })
   
    
   if (! alteraTexto(nome)){
       return res.status(404).json({ mensage:'o campo nome deve ser apenas texto'})
   }
      
   const doctor = await Doctor.create({nome, crp, desordem, email, foto, senha, nascimento, telefone, foto, nomeClinica, cnpj,  endereço, 
    estado,cidade, cep})


   return res.status(200).json({
       message:'sucesso',
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
   const {nome} = req.query


   const condition = {}


   if(nome){


       condition.nome = {[Op.like]:`%${nome}%`}
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


   const {nome, crp, desordem, email, senha, nascimento, telefone, foto} = req.body


   const doctor = await Doctor.findByPk(id)


   if(!doctor){
  
       return res.status(404).json("Não econtrado")
   }
  


   if(nome) doctor.nome = nome
   if(crp) doctor.crp = crp
   if(desordem) doctor.desordem = desordem
   if(email) doctor.email = email
   if(senha) doctor.senha = senha
   if(nascimento) doctor.nascimento = nascimento
   if(telefone) doctor.telefone = telefone
   if(foto) doctor.foto = foto

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

