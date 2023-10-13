var nombre = document.getElementById("nombre");
var usuario = document.getElementById("usuario");
var correo = document.getElementById("correo");
var contraseña = document.getElementById("contraseña");
var confirmarContraseña = document.getElementById("confirmarContraseña");

var nombre2 = document.getElementById("nombre2");
var usuario2 = document.getElementById("usuario2");
var contraseña2 = document.getElementById("contraseña2");
var errores = "";
var regex = /^[a-zA-Z0-9\s]+$/;

function validarNombre() {

  if (nombre.value.length < 4 || !regex.test(nombre.value)) {
    errores += "El nombre debe tener al menos 4 caracteres y no contener símbolos.\n";
  }

  if (errores != "") {
    alert(errores);
    document.getElementById("nombre").innerHTML = "";
  }

}

function validarUsuario() {
    var regexusr = /^[a-zA-Z0-9_\s]+$/;

    if (usuario.value.length < 4 || usuario.value.length > 12 || !regexusr.test(usuario.value)) {
    errores += "El usuario debe tener entre 4 y 12 caracteres y no contener símbolos excepto por guiones bajos.\n";
  }

  if (errores != "") {
    alert(errores);
    document.getElementById("usuario").innerHTML = "";
  }

}

function validarEmail() {
    var regexemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!regexemail.test(correo.value)) {
        errores += "El correo debe tener un formato válido.\n";
    }

  if (errores != "") {
    alert(errores);
    document.getElementById("email").innerHTML = "";
  }

}
  
function validarPass() {
    //contra tipo banco para llamar la atencion /s
    var regexpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!?])[A-Za-z\d!?]{8,}$/;

    if (!regexpass.test(contraseña.value)) {
        errores += "La contraseña debe tener al menos 8 caracteres, al menos un dígito, al menos una letra minúscula, al menos una letra mayúscula y al menos un signo de exclamación o interrogación.\n";
    }

  if (errores != "") {
    alert(errores);
    document.getElementById("pass").innerHTML = "";
  }

}


function confirmarPass() {
    if (contraseña.value != confirmarContraseña.value) {
        errores += "La contraseña y la confirmación deben coincidir.\n";
    }

  if (errores != "") {
    alert(errores);
    document.getElementById("pass2").innerHTML = "";
  }

}

function redirectToRegister(){
    alert("Inicio de sesion exitoso");
}

function redirectToLogin(){
    alert("Inicio de sesion exitoso");
}



