const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const cdoctor = require ('./controllers/doctor')

const cdisorder = require ('./controllers/disorder')

const radmin = require('./routes/admin')
app.use('/admin', radmin)

const rdoctor = require ('./routes/doctor')
app.use('/doctor', rdoctor)








app.post("/disorder", (req, res)=>{
    const {name, cid} = req.body

    if(!name || !cid){
        res.status(400).json({message: "Os campos name e cid são obrigatório"})
    }

    let odisorder = cdisorder.create_disorder(name, cid)
    res.status(200).json({message: "Sucesso", disorder: cdisorder.create_disorder})

})

app.get("/disorder", (req, res) => {
    return res.status(200).json({message: 'sucesso', disorder: cdisorder.create_disorder()
    })
})

app.put("/disorder/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const {name, cid} = req.body

    let retorno = cdisorder.update_disorder(id, name, cid)
    return res.status(retorno.status).json(retorno.msg)   
})

app.delete("/disorder/:id", (req, res)=>{
     const id = parseInt(req.params.id)
    //não precisa de body

    if(cdisorder.delete_disorder(id)){
        return res.status(200).json("foi de base")
    }else{
        return res.status(404).json("não encontrado")
    }
})


app.listen(port, () => {
    console.log(`Run: http://localhost:${port}`);
})

