module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;

/*var string;*/
/*var texto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";*/
/*var texto = /^[A-Z]+$/i;*/
/*var mayusculas = /^[A-Z]+$/;*/
var anoNacimiento;
var numero = /^([0-9])+$/;
var contrasena;
/*var validacionCarac = /^[a-zA-Z\d]{6,}$/;
var alfanumericos = /^[a-zA-Z0-9]+$/;*/
/*var parametros = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;*/

function validar_nombre_usuario(string){
    //Implementación
    /*var nombre = document.getElementById("nombre_usuario").value;*/
    if (/^[A-Z].*/g.test(string)){ 
        return true;
    }
    else{
        return false;
    }    
}

function validar_anoNacimiento_usuario(valor){
    //Implementación
    anoNacimiento = document.getElementById("anoNacimiento_usuario");
    if (numero.test(anoNacimiento)){
        if (numero>0){
            if(numero=>1900 && numero<2022){
                return true;
            }
        }
    }
    else{
        return false;
    }
}

function validar_contrasena(string){
    //Implementación
    contrasena = document.getElementById("contrasena_usuario").value;

    if(contrasena.length>=6){
        return true;
    }
    else{
        return false;
    }
}
