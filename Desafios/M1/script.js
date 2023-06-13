//Ejercicio 1
let costos_fijos = parseFloat(prompt("Ingrese Costos Fijos: "))
let precio_venta = parseFloat(prompt("Ingrese Precio de Venta: "))
let costos_variables = parseFloat(prompt("Ingrese Costos Variables: "))

const resultado = costos_fijos/(precio_venta-costos_variables)

alert("El punto de equilibrio es: " + resultado)

//Ejercicio 2

let ingreso_total = parseFloat(prompt("Ingrese ingreso total: "))

const _50 = ingreso_total*0.5
const _30 = ingreso_total*0.3
const _20 = ingreso_total*0.2

alert("Gastos necesarios: $" + _50 + " Gastos opcionales: $" + _30  + " Ahorro e inversión: $" + _20 )