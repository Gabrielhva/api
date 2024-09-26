const express = require('express')
const router = express.Router()
const cadmin = require ('../controllers/admin')


router.post("/create", (req, res) => {

    const {name,email,password} = req.body

    if(!name || !email || !password){
        return res.status(400).json({ message: "Você não preencheu algumas das opções: nome, email e senha!"})
    }
                //cadmin.
    const vadmin = cadmin.create_admin(name,email,password)
    console.log(vadmin)
    return res.status(400).json({ message: "Sucesso!", admin: vadmin})
} )

router.get("/read", (req, res) => {
    return res.status(200).json({
        message: 'sucesso',admin: cadmin.create_admin()
    })
})

router.put("/update/:id", (req, res) => {
    const id = parseInt(req.params.id)
                    
    const {name,email,password} = req.body

    let retorno = cadmin.update_admin(id,name,email,password)
    return res.status(retorno.status).json(retorno.msg)

})

router.delete("/del/:id", (req, res) => {

    const id = parseInt(req.params.id)
    if (cadmin.delete_admin(id)) {
    return res.status(201).json("Você foi de base XD")
    }
    else{
        return res.status(404).json("Não encontrado")
    }
})


module.exports = router