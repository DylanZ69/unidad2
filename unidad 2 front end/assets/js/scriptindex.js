function validar(){
    console.log("HI")
    let eNombre = document.getElementById("nombre")
    console.log(eNombre)
    let vNombre = eNombre.value.trim()
    console.log(vNombre)
    let eErrorNombre = document.getElementById("errorNombre")

    let eApellido = document.getElementById("apellido")
    console.log(eApellido)
    let vApellido = eApellido.value.trim()
    console.log(vApellido)
    let eErrorApellido = document.getElementById("errorApellido")

    if (vNombre.length==0){
        console.log("debes completar este campo")
    }
    else if(vNombre.length > 3){
        console.log("Cumple")
        eErrorNombre.innerText=""  
        eNombre.style.backgroundColor = "green"
    }
    else{
        console.log("error pocos caracteres")
        alert("debes ingresar al menos 3 caracteres")
        eErrorNombre.innerText="debes ingresar 3 caracteres como minimo!"
        eNombre.style.backgroundColor = "red"
        eNombre.style.color="white"
    }


    if (vApellido.length==0){
        console.log("debes completar este campo")
    }
    else if(vApellido.length > 3){
        console.log("Cumple")
        eErrorApellido.innerText=""  
        eApellido.style.backgroundColor = "green"
    }
    else{
        console.log("error pocos caracteres")
        alert("debes ingresar al menos 3 caracteres")
        eErrorApellido.innerText="debes ingresar 3 caracteres como minimo!"
        eApellido.style.backgroundColor = "red"
        eApellido.style.color="white"
    }

}