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