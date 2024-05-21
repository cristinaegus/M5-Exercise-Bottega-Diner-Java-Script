import * as lodash from "https://cdn.skypack.dev/lodash@4.17.21";

//*Build out a Diner menu in JAVASCRIPT.
//Bottega Diner

// variables
const menuBreakfast=[
      { name: "croisant", price: 7.95 },
      { name: "tostadas", price: 12.85 },
      { name: "bagel", price: 12.75 },
      { name: "galletas", price: 8.95 },
      { name: "cereales", price: 15.65 }
]
const menuLunchDinner=[
      { name: "sandwich club", price: 16.25 },
      { name: "sandwich pavo", price: 10.75 },
      { name: "hamburgesa vegana", price: 9.50 },
      { name: "hamburguesa california", price: 6.75 },
      { name: "ensalada bacon ", price: 8.75 },
      { name: "tacos", price: 10.75 }
]

const menuSides=[

      { name: "patatas fritas", price: 6.75 },
      { name: "huevos", price: 10.75 }
  
]
const menuDrink=[
      { name:"cafe", price: 5.75},
      { name:"refresco", price: 6.50},
      { name:"zumo", price: 4.00},
      { name:"cerveza",price:6.50}
]
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

// Now you can use the 'time' variable in other parts of your code
//**************************************************************************************************************************//
if (time >= 6 && time <= 11) {
     alert("Hora de desayunar!");
    let mensajeDes = "Menú Desayuno: 'Que desea de nuestra carta desayuno?\n";
    for  (const item of menuBreakfast) {mensajeDes += `${item.name} - ${item.price.toFixed(2)}€\n`;
                                        
                                        
} 
  window.alert(mensajeDes);
  let CartaMenuDrink = menuDrink.map(element => `${element.name} ${element.price.toFixed(2)}€\n`);
alert(`La carta de bebidas es:\n${CartaMenuDrink}`);

function obtenerSeleccionBebida() {
    var CartaBebidaFinal = window.prompt(`Por favor, elija una opción de bebida:\n${CartaMenuDrink}`);
    
    // Verificar si la opción ingresada está en la carta de bebidas
    var opcionValidaDrink = menuDrink.some(menu => menu.name === CartaBebidaFinal);
    
    if (opcionValidaDrink) {
        var MontoBebida = menuDrink
            .filter(menu => menu.name === CartaBebidaFinal)
            .map(element => parseFloat(element.price))
            .reduce((a, b) => a + b, 0)
            .toFixed(2)
        
        alert(`El monto a pagar por ${CartaBebidaFinal} es de ${MontoBebida}€.`);
        window.alert(commentVaultBebida[Object.keys(commentVaultBebida)[Math.floor(Math.random() * Object.keys(commentVaultBebida).length)]]);
    } else {
        // Mostrar mensaje de error y volver a pedir la selección
        window.alert('Opción inválida. Por favor, seleccione una bebida válida.');
        obtenerSeleccionBebida();
     
      
      
    }
}

// Llamar a la función para obtener la selección de bebida
obtenerSeleccionBebida();

         
    
     let CartaMenuBreakfast = menuBreakfast.map(element => `${element.name} ${element.price.toFixed(2)}€\n`);

function obtenerSeleccionDesayuno() {
    var CartaDesayunoFinal = window.prompt(`¿Qué desea de nuestra carta de desayunos?:\n${CartaMenuBreakfast}`);
    
    // Verificar si la opción ingresada está en la carta de desayunos
    var opcionValidaBreakfast = menuBreakfast.some(menu => menu.name === CartaDesayunoFinal);
    
    if (opcionValidaBreakfast) {
        var MontoDesayuno = menuBreakfast
            .filter(menu => menu.name === CartaDesayunoFinal)
            .map(element => parseFloat(element.price))
            .reduce((a, b) => a + b, 0)
            .toFixed(2)
        
        window.alert(commentVaultDesayuno[Object.keys(commentVaultDesayuno)[Math.floor(Math.random() * Object.keys(commentVaultDesayuno).length)]]);
        alert(`El monto a pagar por ${CartaDesayunoFinal} es de ${MontoDesayuno}€.`);
    } else {
        // Mostrar mensaje de error y volver a pedir la selección
        window.alert('Opción inválida. Por favor, seleccione un plato válido.');
        obtenerSeleccionDesayuno();
    }
}

// Llamar a la función para obtener la selección de desayuno
obtenerSeleccionDesayuno();

 
    
  // Introcucir menuSides ofecerlo y acumular al monto total de la cuenta
      let CartaMenuSides = menuSides.map(element => `${element.name}-${element.price.toFixed(2)}€\n`);
alert(`Desea un acompañamiento con su menú:\n${CartaMenuSides}`);

function obtenerSeleccionAcompanamiento() {
    const CartaSidesFinal = window.prompt(`Por favor, escoja una opción para añadir a su menú:\n${CartaMenuSides}`);
    
    // Verificar si la opción ingresada está en la carta de acompañamientos
    var opcionValidaSide = menuSides.some(menu => menu.name === CartaSidesFinal);
    
    if (opcionValidaSide) {
        var MontoSide = menuSides
            .filter(menu => menu.name === CartaSidesFinal)
            .map(element => parseFloat(element.price))
            .reduce((a, b) => a + b, 0)
            .toFixed(2)
        
        alert(`El monto a pagar por ${CartaSidesFinal} es de ${MontoSide}€.`);
    } else {
        // Mostrar mensaje de error y volver a pedir la selección
        window.alert('Opción inválida. Por favor, seleccione un acompañamiento válido.');
        obtenerSeleccionAcompanamiento();
    
 
      }
 
 } 

// Llamar a la función para obtener la selección de acompañamiento
obtenerSeleccionAcompanamiento();

function SumTotal(MontoBebida, MontoDesayuno, MontoSide) {
    return MontoBebida + MontoDesayuno + MontoSide;
}

// Filter and calculate the total amounts
var MontoBebida = menuDrink
    .filter(menu => menu.name === obtenerSeleccionBebida)
    .reduce((total, menu) => total + parseFloat(menu.price), 0);

var MontoDesayuno = menuBreakfast
    .filter(menu => menu.name === obtenerSeleccionDesayuno)
    .reduce((total, menu) => total + parseFloat(menu.price), 0);

var MontoSide = menuSides
    .filter(menu => menu.name === obtenerSeleccionAcompanamiento)
    .reduce((total, menu) => total + parseFloat(menu.price), 0);

// Calculate the total using the SumTotal function and convert to fixed decimal places
const total = SumTotal(MontoBebida, MontoDesayuno, MontoSide).toFixed(2);

// Display the total amount
alert(`El total de su pedido es de: ${total}€`);


  
  
} else if (time >= 12 && time <= 16) {
  
  //***********************************************************************************************************************// 
   alert("Hora de almorzar!");
    let mensajeCom = "Este es nuestro Menu principal\n";
    for (const item of menuLunchDinner) {mensajeCom += `${item.name} - ${item.price.toFixed(2)}€\n`;
                             
   
}
  window.alert(mensajeCom);
 
      let CartaMenuDrink = menuDrink.map(element => `${element.name} ${element.price.toFixed(2)}€\n`);
alert(`La carta de bebidas es:\n${CartaMenuDrink}`);

function obtenerSeleccionBebida() {
    var CartaBebidaFinal = window.prompt(`Por favor, elija una opción de bebida:\n${CartaMenuDrink}`);
    
    // Verificar si la opción ingresada está en la carta de bebidas
    var opcionValidaDrink = menuDrink.some(menu => menu.name === CartaBebidaFinal);
    
    if (opcionValidaDrink) {
        var MontoBebida = menuDrink
            .filter(menu => menu.name === CartaBebidaFinal)
            .map(element => parseFloat(element.price))
            .reduce((a, b) => a + b, 0)
            .toFixed(2)
        
        alert(`El monto a pagar por ${CartaBebidaFinal} es de ${MontoBebida}€.`);
        window.alert(commentVaultBebida[Object.keys(commentVaultBebida)[Math.floor(Math.random() * Object.keys(commentVaultBebida).length)]]);
    } else {
        // Mostrar mensaje de error y volver a pedir la selección
        window.alert('Opción inválida. Por favor, seleccione una bebida válida.');
        obtenerSeleccionBebida();
    }
}

// Llamar a la función para obtener la selección de bebida
obtenerSeleccionBebida();


    
     let CartaMenuLunchDinner = menuLunchDinner.map(element => `${element.name} ${element.price.toFixed(2)}€\n`);

function obtenerSeleccionComida() {
    var CartaComidaFinal = window.prompt(`¿Qué desea de nuestra carta?:\n${CartaMenuLunchDinner}`);
    
    // Verificar si la opción ingresada está en la carta de comidas
    var opcionValidaLunchDinner = menuLunchDinner.some(menu => menu.name === CartaComidaFinal);
    
    if (opcionValidaLunchDinner) {
        var MontoComida = menuLunchDinner
            .filter(menu => menu.name === CartaComidaFinal)
            .map(element => parseFloat(element.price))
            .reduce((a, b) => a + b, 0)
            .toFixed(2)
        window.alert(commentVaultAlmuerzoCena[Object.keys(commentVaultAlmuerzoCena)[Math.floor(Math.random() * Object.keys(commentVaultAlmuerzoCena).length)]]);
        alert(`El monto a pagar por ${CartaComidaFinal} es de ${MontoComida}€.`);
    } else {
        // Mostrar mensaje de error y volver a pedir la selección
        window.alert('Opción inválida. Por favor, seleccione un plato válido.');
        obtenerSeleccionComida();
    }
}

// Llamar a la función para obtener la selección de comida
obtenerSeleccionComida();

      
 // Introcucir menuSides ofecerlo y acumular al monto total de la cuenta
      let CartaMenuSides = menuSides.map(element => `${element.name}-${element.price.toFixed(2)}€\n`);
alert(`Desea un acompañamiento con su menú:\n${CartaMenuSides}`);

function obtenerSeleccionAcompanamiento() {
    var CartaSidesFinal = window.prompt(`Por favor, escoja una opción para añadir a su menú:\n${CartaMenuSides}`);
    
    // Verificar si la opción ingresada está en la carta de acompañamientos
    var opcionValidaSide = menuSides.some(menu => menu.name === CartaSidesFinal);
    
    if (opcionValidaSide) {
        var MontoSide = menuSides
            .filter(menu => menu.name === CartaSidesFinal)
            .map(element => parseFloat(element.price))
            .reduce((a, b) => a + b, 0)
            .toFixed(2)
        
        alert(`El monto a pagar por ${CartaSidesFinal} es de ${MontoSide}€.`);
    } else {
        // Mostrar mensaje de error y volver a pedir la selección
        window.alert('Opción inválida. Por favor, seleccione un acompañamiento válido.');
        obtenerSeleccionAcompanamiento();
    }
}

// Llamar a la función para obtener la selección de acompañamiento
obtenerSeleccionAcompanamiento();

  
  
  
  
    // Code for lunch menu based on the time
} else if (time >= 17 && time <= 22) {
  
  //*****************************************************************************************************************************//
  alert ( "Hora de cenar!");
     let mensajeCen = "Esta es nuestra carta para la cena\n";
      for (const item of menuLunchDinner) {mensajeCen += `${item.name} - ${item.price.toFixed(2)}€\n`;  
  }
  
 
      window.alert(mensajeCen);
  
   let CartaMenuDrink = menuDrink.map(element => `${element.name} ${element.price.toFixed(2)}€\n`);
alert(`La carta de bebidas es:\n${CartaMenuDrink}`);

function obtenerSeleccionBebida() {
    var CartaBebidaFinal = window.prompt(`Por favor, elija una opción de bebida:\n${CartaMenuDrink}`);
    
    // Verificar si la opción ingresada está en la carta de bebidas
    var opcionValidaDrink = menuDrink.some(menu => menu.name === CartaBebidaFinal);
    
    if (opcionValidaDrink) {
        var MontoBebida = menuDrink
            .filter(menu => menu.name === CartaBebidaFinal)
            .map(element => parseFloat(element.price))
            .reduce((a, b) => a + b, 0)
            .toFixed(2)
        
        alert(`El monto a pagar por ${CartaBebidaFinal} es de ${MontoBebida}€.`);
        window.alert(commentVaultBebida[Object.keys(commentVaultBebida)[Math.floor(Math.random() * Object.keys(commentVaultBebida).length)]]);
    } else {
        // Mostrar mensaje de error y volver a pedir la selección
        window.alert('Opción inválida. Por favor, seleccione una bebida válida.');
        obtenerSeleccionBebida();
    }
}

// Llamar a la función para obtener la selección de bebida
obtenerSeleccionBebida();

   
     
      
    let CartaMenuLunchDinner = menuLunchDinner.map(element => `${element.name} ${element.price.toFixed(2)}€\n`);

    function obtenerSeleccionMenu() {
    var CartaCenaFinal = window.prompt(`¿Qué desea de nuestro menú?\n${CartaMenuLunchDinner}`);
    
    // Verificar si la opción ingresada está en el menú
    var opcionValidaLunchDinner = menuLunchDinner.some(menu => menu.name === CartaCenaFinal);
    
    if (opcionValidaLunchDinner) {
        var MontoCena = menuLunchDinner
            .filter(menu => menu.name === CartaCenaFinal)
            .map(element => parseFloat(element.price))
            .reduce((a, b) => a + b, 0)
            .toFixed(2)
        
        window.alert(commentVaultAlmuerzoCena[Object.keys(commentVaultAlmuerzoCena)[Math.floor(Math.random() * Object.keys(commentVaultAlmuerzoCena).length)]]);
        alert(`El monto a pagar por ${CartaCenaFinal} es de ${MontoCena}€.`);
         } else {
        // Mostrar mensaje de error y volver a pedir la selección
        window.alert('Opción inválida. Por favor, seleccione un plato válido.');
        obtenerSeleccionMenu();
       }
    }

// Llamar a la función para obtener la selección del menú
obtenerSeleccionMenu();

          
  
     
    // Introcucir menuSides ofecerlo y acumular al monto total de la cuenta
  
  
    let CartaMenuSides = menuSides.map(element => `${element.name}-${element.price.toFixed(2)}€\n`);
alert(`Desea un acompañamiento con su menú:\n${CartaMenuSides}`);

function obtenerSeleccionAcompanamiento() {
    var CartaSidesFinal = window.prompt(`Por favor, escoja una opción para añadir a su menú:\n${CartaMenuSides}`);
    
    // Verificar si la opción ingresada está en la carta de acompañamientos
    var opcionValidaSide = menuSides.some(menu => menu.name === CartaSidesFinal);
    
    if (opcionValidaSide) {
        var MontoSide = menuSides
            .filter(menu => menu.name === CartaSidesFinal)
            .map(element => parseFloat(element.price))
            .reduce((a, b) => a + b, 0)
            .toFixed(2)
        
        alert(`El monto a pagar por ${CartaSidesFinal} es de ${MontoSide}€.`);
    } else {
        // Mostrar mensaje de error y volver a pedir la selección
        window.alert('Opción inválida. Por favor, seleccione un acompañamiento válido.');
        obtenerSeleccionAcompanamiento();
    }
}

// Llamar a la función para obtener la selección de acompañamiento
obtenerSeleccionAcompanamiento();
     
  
  // Hacer la suma de las comandas de la comida y bebida correspondiente
     
  

      } else {
    alert("El restaurante está cerrado, vuelva pronto.");
   window.alert('Gracias por elegirnos.!');
      }

 
// Función para generar la factura
 
   
   
      
  
  
  




     
 

 






