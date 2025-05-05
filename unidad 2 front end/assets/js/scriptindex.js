function validar(){
    console.log("HI")
    let eNombre = document.getElementById("nombre")
    console.log(eNombre)
    let vNombre = eNombre.value.trim()
    console.log(vNombre)
    if (vNombre.length==0){
        console.log("debes completar este campo")
    }
    else if(vNombre.length > 3){
        console.log("Cumple")
        
    }
    else{
        console.log("error pocos caracteres")
        alert("debes ingresar al menos 3 caracteres")
    }

}