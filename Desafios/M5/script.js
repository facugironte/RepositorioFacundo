//Ejercicio 1

function calcular_resultado(){
    let costos_fijos = document.getElementById("cf").value
    let precio_venta = document.getElementById("pv").value
    let costos_variables = document.getElementById("cv").value

    const resultado = costos_fijos/(precio_venta-costos_variables)

    var parrafo = document.createElement("p")
    parrafo.textContent = resultado

    document.getElementById("form1").appendChild(parrafo)

}

//Ejercicio 2

function calcular_presupuesto(){
    let ingreso_total = document.getElementById("presu").value

    var parrafo = document.createElement("p")
    const resultado = ingreso_total*0.5
    parrafo.textContent = "Gastos necesarios: " + resultado
    document.getElementById("form2").appendChild(parrafo)

    var parrafo2 = document.createElement("p")
    const resultado2 = ingreso_total*0.3
    parrafo2.textContent = "Gastos opcionales: " + resultado2
    document.getElementById("form2").appendChild(parrafo2)

    var parrafo3 = document.createElement("p")
    const resultado3 = ingreso_total*0.2
    parrafo3.textContent = "Ahorro en inversiones: " + resultado3
    document.getElementById("form2").appendChild(parrafo3)

}

/*
let ingreso_total = parseFloat(prompt("Ingrese ingreso total: "))

const _50 = ingreso_total*0.5
const _30 = ingreso_total*0.3
const _20 = ingreso_total*0.2

alert("Gastos necesarios: $" + _50 + " Gastos opcionales: $" + _30  + " Ahorro e inversión: $" + _20 )*/