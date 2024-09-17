// var carrinho = []
// function adiciona_no_carrinho(produto){
//     carrinho.push(produto)
// }







// adiciona_no_carrinho("pizza")
// adiciona_no_carrinho("coca")
// adiciona_no_carrinho("vinho")
// adiciona_no_carrinho("pastel")
// adiciona_no_carrinho("coxinha")

// console.log(carrinho)
//-------------



const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


var admins = []



function create_admin(name,email,password){
    
    let id = 0
    if (admins.length > 0){
        console.log(id)
        id = admins[admins.length-1].id + 1
    }

    

    const admin = {
        "id": id,
        "name": name,
        "email": email,
        "password": password
    }

    admins.push(admin)
    return admin
}

function read_admin(){
    
    create_admin,
    read_admin,
    update_admin,
    delete_admin

}


function update_admin(id,name,email,password){

   let idx = admins.findIndex(admins => admins.id == id)

    if (idx == -1){

        return {status: 404, msg: "Não encontrado"}

    }

    
   admins[idx].name = name
   admins[idx].email = email
   admins[idx].password = password

   return {status: 200, msg: admins[idx]}
}

function delete_admin(id){

    let idx = admins.findIndex(admins => admins.id === id)

    if (idx == -1){
        return false
    }
    
    admins.splice(idx, 1)
    return true
}

module.exports = {

    create_admin,
    read_admin,
    update_admin,
    delete_admin
}

app.post("/admin", (req, res) => {

    const {name,email,password} = req.body

    if(!name || !email || !password){
        return res.status(400).json({ message: "Você não preencheu algumas das opções: nome, email e senha!"})
    }
                //cadmin.
    const vadmin = create_admin(name,email,password)
    return res.status(400).json({ message: "Sucesso!", admin: vadmin})
} )

app.get("/admin", (req, res) => {
    return res.status(200).json({
        message: 'sucesso',admin: admins
    })
})

app.put("/admin/:id", (req, res) => {
    const id = parseInt(req.params.id)
                    
    const {name,email,password} = req.body

    let retorno = update_admin(id,name,email,password)
    return res.status(retorno.status).json(retorno.msg)

})

app.delete("/admin/:id", (req, res) => {

    const id = parseInt(req.params.id)
    if (delete_admin(id)) {
    return res.status(201).json("Você foi de base XD")
    }
    else{
        return res.status(404).json("Não encontrado")
    }
})


app.listen(port, () => {

    console.log(`Run: http://localhost:${port}`);

})

// nada é escrito dps do app.listen















// create_group("Gabriel Henrique Violante do Amaral")
// create_group("gabrielviiolante@gmail.com")
// create_group("1234")

// console.log(admin)