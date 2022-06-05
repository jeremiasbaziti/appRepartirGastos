var nombres = [];
var gastos = [];
var total = 0;
var a_pagar = 0;

function calcular(){
    total = 0;
    a_pagar = 0;
    for (let i=0; i < gastos.length; i++){
        if (gastos[i] != 0){
            total += parseFloat(gastos[i]);
        }else if(gastos[i] == 0){
            let cero = 0;
            let indice = nombres.indexOf(cero);
            nombres.splice (indice, 1);
            gastos.splice (indice, 1);
            alert_err()
        } else if (gastos[i] ==NaN){
            let vacio = NaN;
            let indice = nombres.indexOf(vacio);
            nombres.splice (indice, 1);
            gastos.splice (indice, 1);
            alert_err()
        }
    }
    a_pagar = parseFloat(total/gastos.length).toFixed(2);
}

function agregar (nombre, gasto) {
    nombres.push(nombre);
    gastos.push(gasto);
    calcular();
    imprimir();
}

function borrar(){
    let name = prompt("Ingrese nombre a borrar");
    let indice = nombres.indexOf(name);
    nombres.splice (indice, 1);
    gastos.splice (indice, 1);
    calcular();
    imprimir();
}

function imprimir(){
    let nuevo = document.getElementById("datos");
    nuevo.innerHTML = " ";
    for(let i = 0; i < gastos.length; i++){
        nuevo.innerHTML += `
        <div class= "nom_gasto">
            <p> ${nombres[i]} gasto: ${gastos[i]}</p>
        </div>
        `;
        }
    nuevo.innerHTML += `
    <div class= "resultado">
        <h3 class="tot">En Total se gasto: ${total}</h3>
        <p class="aporte">Cada uno debe aportar: ${a_pagar}</p>
    </div>
    `;
}

function alert_err(){
    alert("El valor ingresado es incorrecto, vuelva a introducir otro por favor: ")
}