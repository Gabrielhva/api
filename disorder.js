const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

var  disorders= []

//** vai para o controlador */
function create_disorder(name, cid){
    let id = 0
    if(disorders.length > 0){
        id = disorders[disorders.length-1].id+1
    }

    const disorder ={
        "id": id,
        "name": name,
        "cid":cid
    }
    disorders.push(disorder)
    return disorder
}

function update_disorder(id, name, cid){
    let idx = disorders.findIndex (disorder=> disorder.id ===id)

    if(idx == -1){
        return { status: 404, msg: "Não encontrado"}
    }

    if(name) disorders[idx].name = name
    if (cid) disorders[idx].cid = cid

    return {status: 200, msg:   disorders[idx]}
}

function delete_disorder(id){
    let  idx = disorders.findIndex(disorder => disorder.id ===id)
    if(idx == -1){
        return false
    }
    disorders.splice(id, 1)
    return true
}

app.post("/disorder", (req, res)=>{
    const {name, cid} = req.body

    if(!name || !cid){
        res.status(400).json({message: "Os campos name e cid são obrigatório"})
    }

    let odisorder = create_disorder(name, cid)
    res.status(200).json({message: "Sucesso", disorder: odisorder})

})

app.get("/disorder", (req, res) => {
    return res.status(200).json({message: 'sucesso', disorder: disorders})
})

app.put("/disorder/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const {name, cid} = req.body

    let retorno = update_disorder(id, name, cid)
    return res.status(retorno.status).json(retorno.msg)   
})

app.delete("/disorder/:id", (req, res)=>{
     const id = parseInt(req.params.id)
    //não precisa de body

    if(delete_disorder(id)){
        return res.status(200).json("foi de base")
    }else{
        return res.status(404).json("não encontrado")
    }
})
   

    
    

app.listen(port, () =>{
    console.log(`Run: http://localhost:${port}`)

})
