const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


var doctors = []
function create_doctor(name, crp, classificacao) {
    let id = 0
    if (doctors.length > 0 ) {
       id = doctors[doctors.length-1].id + 1
    }


    const doctor={
        "id" : id,
        "name": name,
        "crp": crp,
        "classificacao": classificacao
    }

    doctors.push(doctor)
    return doctor
        
}





function update_doctor (id, name, crp, classificacao){
    let idx = doctors.findIndex(doctor => doctor.id ===id )

    if(idx == -1){
        return {status: 404, msg: "Não encontrado"}
    }

    if(name) doctors[idx].name = name
    if(crp) doctors[idx].crp = crp
    if(classificacao)doctors[idx].classificacao = classificacao

    return {status: 200, msg: doctors[idx]}
}

function delete_doctor(id){
    let idx = doctors.findIndex(doctor => doctor.id === id)
    
    if(idx == -1){
        return false
    }
    
    doctors.splice(idx, 1)
    return true 
}
    
app.post("/doctor",(req, res) => {
    const {name, crp, classificacao} = req.body
    if(!name || !crp){
        return res.status(400).json({ message: 'preencha os campos name e crp são obrigatorios, o campo classificação é opcional' });
    }

    const doctor= create_doctor(name, crp, classificacao)
    return res.status(200).json(
        { message: 'Sucesso', doctor:doctor}
    )

})

app.get("/doctor",(req, res) => {
    
    return res.status(200).json(
        { message: 'Sucesso', lista: doctors}
    )

})

app.put("/doctor/:id",(req,res ) => {
    const id = parseInt(req.params.id)

    const {name, crp, classificacao} = req.body

    let retorno = update_doctor (id, name, crp, classificacao)
    return res.status(retorno.status).json(retorno.msg)



})

app.delete("/doctor/:id", (req, res) =>{

    const id = parseInt(req.params.id)
    if (delete_doctor(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não foi encontrado")
    }


})



app.listen(port, () => {
    console.log(`Run: http://localhost:${port}`);
})
