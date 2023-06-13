let edad = parseInt(prompt("Ingrese su edad: "))

if (edad >= 18){
    alert("Bienvenido.")
} else{
    alert("Error.")
}

var user = prompt("Ingrese su usuario: ")
var contraseña = prompt("Ingrese su contraseña: ")

if (user == "admin" && contraseña == "1234"){
    alert("Logueado.")
} else{
    alert("Usuario o contraseña incorrectos.")
}