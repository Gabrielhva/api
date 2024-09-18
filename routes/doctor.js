const express = require('express')
const router = express.Router()
const cdoctor = require ('../controllers/doctor')

router.post("/create",(req, res) => {
    const {name, crp, classificacao} = req.body
    if(!name || !crp){
        return res.status(400).json({ message: 'preencha os campos name e crp são obrigatorios, o campo classificação é opcional' });
    }

    const doctor= cdoctor.create_doctor(name, crp, classificacao)
    return res.status(200).json(
        { message: 'Sucesso', doctor:doctor}
    )

})

router.get("/read",(req, res) => {
    
    return res.status(200).json(
        { message: 'Sucesso', lista: cdoctor.read_doctor()

        }
    )

})

router.put("/update/:id",(req,res ) => {
    const id = parseInt(req.params.id)

    const {name, crp, classificacao} = req.body

    let retorno = cdoctor.update_doctor (id, name, crp, classificacao)
    return res.status(retorno.status).json(retorno.msg)



})

router.delete("/del/:id", (req, res) =>{

    const id = parseInt(req.params.id)
    if (cdoctor.delete_doctor(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não foi encontrado")
    }


})

module.exports = router