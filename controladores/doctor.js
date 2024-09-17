

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

function read_doctor(){
    
    create_doctor,
    read_doctor,
    update_doctor,
    delete_doctor

}


module.exports = {

    create_doctor,
    read_doctor,
    update_doctor,
    delete_doctor
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
    
