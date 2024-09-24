const Admin = require('../models/admin')

async function create_admin(id, name,email,password){
    
    const admin = await Admin.create(id, name, email, password)

    
    return admin
}

async function read_admin(){
    
    return await admin.findAll()

}


async function update_admin(id,name,email,password){

   const admin = await Admin.findByPk(id)

    if (!Admin){

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
    
    if(!Admin){
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