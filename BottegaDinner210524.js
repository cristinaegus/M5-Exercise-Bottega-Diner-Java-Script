import * as lodash from "https://cdn.skypack.dev/lodash@4.17.21";

// Variables del menú
const menuBreakfast = [
    { name: "croisant", price: 7.95 },
    { name: "tostadas", price: 12.85 },
    { name: "bagel", price: 12.75 },
    { name: "galletas", price: 8.95 },
    { name: "cereales", price: 15.65 }
];
const menuLunchDinner = [
    { name: "sandwich club", price: 16.25 },
    { name: "sandwich pavo", price: 10.75 },
    { name: "hamburgesa vegana", price: 9.50 },
    { name: "hamburguesa california", price: 6.75 },
    { name: "ensalada bacon ", price: 8.75 },
    { name: "tacos", price: 10.75 }
];
const menuSides = [
    { name: "patatas fritas", price: 6.75 },
    { name: "huevos", price: 10.75 }
];
const menuDrink = [
    { name: "cafe", price: 5.75 },
    { name: "refresco", price: 6.50 },
    { name: "zumo", price: 4.00 },
    { name: "cerveza", price: 6.50 }
];

const commentVaultDesayuno = {
    "Muy buena opción": "Es una excelente elección",
    "Todos los productos son ecologicos": "Esta bien!, Una muy buena elección: enseguida le traigo su desayuno"
};

const commentVaultAlmuerzoCena = {
    "Bien escogido": "Esta muy rico",
    "Todos los productos son ecologicos": "ahora vengo con su pedido!, Una muy buena elección: enseguida le traigo la comida"
};
const commentVaultSide = {
    "Buena eleccion": "Esta muy bueno",
    "Todos los productos son ecologicos": "Esta bien, buena elección: enseguida le traigo su pedido"
};
const commentVaultBebida = {
    "Estupenda eleccion!": "perfecto como acompañamiento",
    "Muy buena eleccion!": "Muy bien, enseguida le traigo el pedido"
};

// Saludo
alert("¡Hola! Mi nombre es Maria y hoy seré su camarera.");

// Solicita al usuario que introduzca la hora actual en formato HH
let time = prompt("¿Podría por favor introducir la hora actual en formato HH (24 horas)?");

while (time < 0 || time > 23 || isNaN(time)) {
    alert("Ha introducido un valor incorrecto. Por favor, introduzca la hora nuevamente.");
    time = prompt("¿Podría por favor introducir la hora actual en formato HH (24 horas)?");
}

// Función para seleccionar elementos del menú
function obtenerSeleccion(menu, mensaje) {
    let menuString = menu.map(item => `${item.name} - ${item.price.toFixed(2)}€`).join("\n");
    let seleccion = window.prompt(`${mensaje}\n${menuString}`);
    
    let item = menu.find(menuItem => menuItem.name.toLowerCase() === seleccion.toLowerCase());
    
    if (item) {
        return item;
    } else {
        alert('Opción inválida. Por favor, seleccione una opción válida.');
        return obtenerSeleccion(menu, mensaje);
    }
}

// Función para generar comentarios aleatorios
function obtenerComentario(commentVault) {
    let comentarios = Object.values(commentVault);
    return comentarios[Math.floor(Math.random() * comentarios.length)];
}

// Inicializar total
let total = 0;

if (time >= 6 && time <= 11) {
    alert("Hora de desayunar!");
    let seleccionDesayuno = obtenerSeleccion(menuBreakfast, "¿Qué desea de nuestra carta de desayunos?");
    total += seleccionDesayuno.price;
    alert(`El monto a pagar por ${seleccionDesayuno.name} es de ${seleccionDesayuno.price.toFixed(2)}€.`);
    alert(obtenerComentario(commentVaultDesayuno));
    
    let seleccionBebida = obtenerSeleccion(menuDrink, "¿Qué desea de nuestra carta de bebidas?");
    total += seleccionBebida.price;
    alert(`El monto a pagar por ${seleccionBebida.name} es de ${seleccionBebida.price.toFixed(2)}€.`);
    alert(obtenerComentario(commentVaultBebida));
    
    let seleccionSide = obtenerSeleccion(menuSides, "¿Desea un acompañamiento con su menú?");
    total += seleccionSide.price;
    alert(`El monto a pagar por ${seleccionSide.name} es de ${seleccionSide.price.toFixed(2)}€.`);
    alert(obtenerComentario(commentVaultSide));
    
} else if (time >= 12 && time <= 16) {
    alert("Hora de almorzar!");
    let seleccionAlmuerzo = obtenerSeleccion(menuLunchDinner, "¿Qué desea de nuestra carta?");
    total += seleccionAlmuerzo.price;
    alert(`El monto a pagar por ${seleccionAlmuerzo.name} es de ${seleccionAlmuerzo.price.toFixed(2)}€.`);
    alert(obtenerComentario(commentVaultAlmuerzoCena));
    
    let seleccionBebida = obtenerSeleccion(menuDrink, "¿Qué desea de nuestra carta de bebidas?");
    total += seleccionBebida.price;
    alert(`El monto a pagar por ${seleccionBebida.name} es de ${seleccionBebida.price.toFixed(2)}€.`);
    alert(obtenerComentario(commentVaultBebida));
    
    let seleccionSide = obtenerSeleccion(menuSides, "¿Desea un acompañamiento con su menú?");
    total += seleccionSide.price;
    alert(`El monto a pagar por ${seleccionSide.name} es de ${seleccionSide.price.toFixed(2)}€.`);
    alert(obtenerComentario(commentVaultSide));
    
} else if (time >= 17 && time <= 22) {
    alert("Hora de cenar!");
    let seleccionCena = obtenerSeleccion(menuLunchDinner, "¿Qué desea de nuestro menú?");
    total += seleccionCena.price;
    alert(`El monto a pagar por ${seleccionCena.name} es de ${seleccionCena.price.toFixed(2)}€.`);
    alert(obtenerComentario(commentVaultAlmuerzoCena));
    
    let seleccionBebida = obtenerSeleccion(menuDrink, "¿Qué desea de nuestra carta de bebidas?");
    total += seleccionBebida.price;
    alert(`El monto a pagar por ${seleccionBebida.name} es de ${seleccionBebida.price.toFixed(2)}€.`);
    alert(obtenerComentario(commentVaultBebida));
    
    let seleccionSide = obtenerSeleccion(menuSides, "¿Desea un acompañamiento con su menú?");
    total += seleccionSide.price;
    alert(`El monto a pagar por ${seleccionSide.name} es de ${seleccionSide.price.toFixed(2)}€.`);
    alert(obtenerComentario(commentVaultSide));
    
} else {
    alert("El restaurante está cerrado, vuelva pronto.");
    alert('Gracias por elegirnos.!');
}

// Mostrar el total
alert(`El total de su pedido es de: ${total.toFixed(2)}€`);
