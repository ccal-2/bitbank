let datos = {}

let nombre

let saldo

function guardaDatos() {

    nombre = document.querySelector('#nombre')
    saldo = document.querySelector('#saldo')
    datos.nombre = nombre.value
    datos.saldo = parseInt(saldo.value)
    localStorage.setItem('datos', JSON.stringify(datos))
}


function transacciones() {



    //let datos = JSON.parse(localStorage.getItem('saldo'))

    //document.querySelector('#saldoActual').innerHTML = datos.saldo;

    console.log(document.querySelector('input#saldo'))



}