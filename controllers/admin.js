const Admin = require('../models/admin')

async function create_admin(name,email,password, res){

    if (! validateName(name)){
        return res.status(301).json({ message: "nome inválido, é preciso conter nome e sobrenome! "})
    }

    if (! validateEmail(email)) {
        return res.status(301).json({ message: "email inválido!"})
    } 

    if (! validatePassword(password)) {
        return res.status(301).json({ message: "A senha precisa conter um caracter especial(ex:$%#@!&) e um número!"})
    } 

    const admin = await Admin.create({name, email, password})

    return res.status(200).json({ message: "Sucesso!", admin: admin})
}

function validateName(name){
    var re = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/
    return re.test(name)
}

function validateEmail(email){
    var re = /\S+@\S+\.\S+/
    return re.test(email)
}  

function validatePassword(password){
    var re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z!@#$%;*(){}_+^&])(?!\1)){6,}$/
    return re.test(password)
}

async function read_admin(){
    
    return await Admin.findAll()

}

async function update_admin(id,name,email,password){

   const admin = await Admin.findByPk(id)

    if (!admin){

        return {status: 404, msg: "Não encontrado"}

    }

    if(name) admin.name = name
    if(email) admin.email = email
    if(password) admin.password = password

    await admin.save()

   return {status: 200, msg: admin}
}

async function delete_admin(id){

    const admin = await Admin.findByPk(id)
    
    if(!admin){
        return false
    }

    await admin.destroy()

    return true
}

module.exports = {

    create_admin,
    read_admin,
    update_admin,
    delete_admin
}