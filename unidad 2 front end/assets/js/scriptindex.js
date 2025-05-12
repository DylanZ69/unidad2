function validarFormulario() {
    let valido = true;
  
    valido &= validarLargoMinimo("text", 3, "errorText");
    valido &= validarPassword("password", "errorPassword");
    valido &= validarEmail("email", "errorEmail");
    valido &= validarURL("url", "errorURL");
    valido &= validarTelefono("tel", "errorTel");
    valido &= validarNumero("number", 1, 100, "errorNumber");
    valido &= validarNoVacio("date", "errorDate");
    valido &= validarCheckbox("checkbox", "errorCheckbox");
    valido &= validarRadio("sexo", "errorSexo");
    valido &= validarNoVacio("select", "errorSelect");
    valido &= validarLargoMaximo("textarea", 500, "errorComentarios");
  
    if (valido) {
      alert("Formulario válido y enviado.");
    } else {
      alert("Por favor corrige los errores antes de enviar.");
    }
  
    return !!valido;
  }
  
  function validarLargoMinimo(id, min, errorId) {
    const el = document.getElementById(id);
    const valor = el.value.trim();
    const error = document.getElementById(errorId);
    if (valor.length < min) {
      error.innerText = `Debe tener al menos ${min} caracteres.`;
      marcarError(el);
      return false;
    }
    limpiarError(el, error);
    return true;
  }
  
  function validarLargoMaximo(id, max, errorId) {
    const el = document.getElementById(id);
    const valor = el.value.trim();
    const error = document.getElementById(errorId);
    if (valor.length > max) {
      error.innerText = `Máximo ${max} caracteres permitidos.`;
      marcarError(el);
      return false;
    }
    limpiarError(el, error);
    return true;
  }
  
  function validarPassword(id, errorId) {
    const el = document.getElementById(id);
    const valor = el.value.trim();
    const error = document.getElementById(errorId);
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    if (!regex.test(valor)) {
      error.innerText = "Min. 8 caracteres, mayúscula, minúscula y número.";
      marcarError(el);
      return false;
    }
    limpiarError(el, error);
    return true;
  }
  
  function validarEmail(id, errorId) {
    const el = document.getElementById(id);
    const valor = el.value.trim();
    const error = document.getElementById(errorId);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(valor)) {
      error.innerText = "Email no válido.";
      marcarError(el);
      return false;
    }
    limpiarError(el, error);
    return true;
  }
  
  function validarURL(id, errorId) {
    const el = document.getElementById(id);
    const valor = el.value.trim();
    const error = document.getElementById(errorId);
    try {
      new URL(valor);
      limpiarError(el, error);
      return true;
    } catch {
      error.innerText = "URL no válida.";
      marcarError(el);
      return false;
    }
  }
  
  function validarTelefono(id, errorId) {
    const el = document.getElementById(id);
    const valor = el.value.trim();
    const error = document.getElementById(errorId);
    const regex = /^\+?\d{7,15}$/;
    if (!regex.test(valor)) {
      error.innerText = "Teléfono no válido.";
      marcarError(el);
      return false;
    }
    limpiarError(el, error);
    return true;
  }
  
  function validarNumero(id, min, max, errorId) {
    const el = document.getElementById(id);
    const valor = parseFloat(el.value);
    const error = document.getElementById(errorId);
    if (isNaN(valor) || valor < min || valor > max) {
      error.innerText = `Número entre ${min} y ${max}.`;
      marcarError(el);
      return false;
    }
    limpiarError(el, error);
    return true;
  }
  
  function validarNoVacio(id, errorId) {
    const el = document.getElementById(id);
    const valor = el.value.trim();
    const error = document.getElementById(errorId);
    if (valor === "") {
      error.innerText = "Este campo es obligatorio.";
      marcarError(el);
      return false;
    }
    limpiarError(el, error);
    return true;
  }
  
  function validarCheckbox(id, errorId) {
    const el = document.getElementById(id);
    const error = document.getElementById(errorId);
    if (!el.checked) {
      error.innerText = "Debe aceptar los términos.";
      return false;
    }
    error.innerText = "";
    return true;
  }
  
  function validarRadio(name, errorId) {
    const radios = document.getElementsByName(name);
    const error = document.getElementById(errorId);
    for (let radio of radios) {
      if (radio.checked) {
        error.innerText = "";
        return true;
      }
    }
    error.innerText = "Debe seleccionar una opción.";
    return false;
  }
  
  function marcarError(el) {
    el.style.backgroundColor = "red";
    el.style.color = "white";
  }
  
  function limpiarError(el, error) {
    el.style.backgroundColor = "";
    el.style.color = "";
    error.innerText = "";
  }
  