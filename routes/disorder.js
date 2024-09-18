
const express = require('express')
const router = express.Router()
const cdisorder = require ('../controllers/disorder')




router.post("/create", (req, res)=>{
    const {name, cid} = req.body

    if(!name || !cid){
        res.status(400).json({message: "Os campos name e cid são obrigatório"})
    }

    let odisorder = cdisorder.create_disorder(name, cid)
    res.status(200).json({message: "Sucesso", disorder: odisorder})

})

router.get("/read", (req, res) => {
    return res.status(200).json({message: 'sucesso',disorder: cdisorder.create_disorder()})
})

router.put("/update/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const {name, cid} = req.body

    let retorno = cdisorder.update_disorder(id, name, cid)
    return res.status(retorno.status).json(retorno.msg)   
})

router.delete("/del/:id", (req, res)=>{
     const id = parseInt(req.params.id)
    //não precisa de body

    if(cdisorder.delete_disorder(id)){
        return res.status(200).json("foi de base")
    }else{
        return res.status(404).json("não encontrado")
    }
})

module.exports = router