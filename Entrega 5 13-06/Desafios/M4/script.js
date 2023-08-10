//Ejercicio 1

var flujoDeCaja = [
    {
        periodo: "Enero",
        ingreso: 1500,
        egreso: 1500
    },
    {
        periodo: "Febrero",
        ingreso: 2500,
        egreso: 2500
    },
    {
        periodo: "Marzo",
        ingreso: 84683,
        egreso: 1155
    },
    {
        periodo: "Abril",
        ingreso: 135353,
        egreso: 1533
    },
    {
        periodo: "Mayo",
        ingreso: 1535,
        egreso: 5434
    },
    {
        periodo: "Junio",
        ingreso: 4343354,
        egreso: 5434543
    },
    {
        periodo: "Julio",
        ingreso: 435453,
        egreso: 4543
    },
    {
        periodo: "Agosto",
        ingreso: 78351,
        egreso: 7816
    },
    {
        periodo: "Septiembre",
        ingreso: 1878,
        egreso: 95634
    },
    {
        periodo: "Octubre",
        ingreso: 48483,
        egreso: 9433
    },
    {
        periodo: "Noviembre",
        ingreso: 35483,
        egreso: 53133
    },
    {
        periodo: "Diciembre",
        ingreso: 3843,
        egreso: 348133
    }
]

let total = 0

flujoDeCaja.forEach(
    function(elemento){
        total += elemento.ingreso
        total -= elemento.egreso    
    }
)

switch(true){
    case (total > 0):
        alert("1")
    case (total < 0):
        alert("-1")
    case (total === 0):
        alert("0")
}

//Ejercicio 2

var ofertaCreditos = [
    {
        nombre: "Plan 001",
        capital: 150000,
        plazo: 30,
        tasa: 0.15
    },
    {
        nombre: "Plan 002",
        capital: 300000,
        plazo: 180,
        tasa: 0.10
    },
    {
        nombre: "Plan 003",
        capital: 4850000,
        plazo: 60,
        tasa: 0.23
    }
]

let interes = 0

ofertaCreditos.forEach(
    function(elemento){
        interes = (elemento.capital * elemento.plazo * elemento.tasa)/100
        elemento["interes"] = interes
        console.log(elemento)
    }
)