var nombre = [];
var gasto = [];
var total = 0;
var a_pagar = 0;

function calcular(){
    for(let i = 0; i<gastos.length; i++){
        total += parseFloat (gasto[i])
    }
    a_pagar= parseFloat (total / parseInt(gastos.length));
}

function agregar (nombre, gasto) {
    console.log(gastos, nombres);
    nombres.push(nombre);
    gastos.push(gasto);
    var nuevo = document.getElementById("datos");
    nuevo.innerHTML += ` 
    <div class="flex-item">
        <p>${nombre} gasto ${gasto} </p>
    </div>
    `; 
}

function borrar_uno(){
    console.log(nombres, gastos);
    let name = prompt("Ingrese nombre a borrar");
    let indice = nombres.indexOf(name);
    nombres.splice (indice, 1);
    gastos.splice (indice, 1);
    console.log(nombres, gastos);
}

function imprimir(){
    let nuevo = document.getElementById("datos");
    nuevo.innerHTML = " ";
    for(let i = 0; i < gastos.length; i++){
        nuevo.innerHTML += `
        <div class= "flex-item">
            <p> ${nombres[i]} gasto: ${gastos[i]}</p>
        </div>
        `;
    }
}