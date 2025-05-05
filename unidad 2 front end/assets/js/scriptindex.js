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


    validarLargoMinimo(eNombre,vNombre,eErrorNombre)
    validarLargoMinimo(eApellido,vApellido,eErrorApellido)

}
function validarLargoMinimo(elemento,valor,eError){
    if (valor.length==0){
        console.log("debes completar este campo")
    }
    else if(valor.length >= 3){
        console.log("Cumple")
        eError.innerText=""  
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
    }
    else{
        console.log("error pocos caracteres")
        alert("debes ingresar al menos 3 caracteres")
        eError.innerText="debes ingresar 3 caracteres como minimo!"
        elemento.style.backgroundColor = "red"
        elemento.style.color="white"
    }
}