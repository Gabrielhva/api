
const Disorder = require('../models/disorder')

var  disorders= []

//** vai para o controlador */
function create_disorder(name, cid){
    let id = 0
    if(disorders.length > 0){
        id = disorders[disorders.length-1].id+1
    }

    const disorder = new Disorder(id, name, cid)

    disorders.push(disorder)
    return disorder
}

function read_disorder(){
    return disorders

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
   
module.exports = {

    create_disorder,
    read_disorder,
    update_disorder,
    delete_disorder
}
    
    

