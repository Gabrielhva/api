const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const cdoctor = require ('./controllers/doctor')
const cadmin = require ('./controllers/admin')


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


app.post("/admin", (req, res) => {

    const {name,email,password} = req.body

    if(!name || !email || !password){
        return res.status(400).json({ message: "Você não preencheu algumas das opções: nome, email e senha!"})
    }
                //cadmin.
    const vadmin = cadmin.create_admin(name,email,password)
    return res.status(400).json({ message: "Sucesso!", admin: vadmin})
} )

app.get("/admin", (req, res) => {
    return res.status(200).json({
        message: 'sucesso',admin: cadmin.create_admin()
    })
})

app.put("/admin/:id", (req, res) => {
    const id = parseInt(req.params.id)
                    
    const {name,email,password} = req.body

    let retorno = cadmin.update_admin(id,name,email,password)
    return res.status(retorno.status).json(retorno.msg)

})

app.delete("/admin/:id", (req, res) => {

    const id = parseInt(req.params.id)
    if (cadmin.delete_admin(id)) {
    return res.status(201).json("Você foi de base XD")
    }
    else{
        return res.status(404).json("Não encontrado")
    }
})



app.listen(port, () => {
    console.log(`Run: http://localhost:${port}`);
})

