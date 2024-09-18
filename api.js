const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const cdoctor = require ('./controllers/doctor')

const cdisorder = require ('./controllers/disorder')

const radmin = require('./routes/admin')
app.use('/admin', radmin)


app.post("/doctor",(req, res) => {
    const {name, crp, classificacao} = req.body
    if(!name || !crp){
        return res.status(400).json({ message: 'preencha os campos name e crp são obrigatorios, o campo classificação é opcional' });
    }

    const doctor= cdoctor.create_doctor(name, crp, classificacao)
    return res.status(200).json(
        { message: 'Sucesso', doctor:doctor}
    )

})

app.get("/doctor",(req, res) => {
    
    return res.status(200).json(
        { message: 'Sucesso', lista: cdoctor.read_doctor()

        }
    )

})

app.put("/doctor/:id",(req,res ) => {
    const id = parseInt(req.params.id)

    const {name, crp, classificacao} = req.body

    let retorno = cdoctor.update_doctor (id, name, crp, classificacao)
    return res.status(retorno.status).json(retorno.msg)



})

app.delete("/doctor/:id", (req, res) =>{

    const id = parseInt(req.params.id)
    if (cdoctor.delete_doctor(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não foi encontrado")
    }


})



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

