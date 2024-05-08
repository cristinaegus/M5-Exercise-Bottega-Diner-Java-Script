//*Build out a Diner menu in JAVASCRIPT.
//Bottega Diner

// variables
const menuBreakfast=[
      { name: "Tortitas de arandanos", price: 7.95 },
      { name: "Tostadas francesas con fresas y nata", price: 12.85 },
      { name: "Bagel de salmon", price: 12.75 },
      { name: "Gran galleta choco chips", price: 8.95 },
      { name: "Tostadas con jamon iberico y aove", price: 15.65 },
]
const menuLunch=[
      { name: "Sandwich club de pollo y aguacate", price: 16.25 },
      { name: "Sandwich de pavo", price: 10.75 },
      { name: "Salmon ahumado con alcaparras ", price: 11.50 },
      { name: "Ensalda de bacon y queso", price: 8.50 },
      { name: "Ensalada Mejicana ", price: 8.75 },
      { name: "Hamburguesa especial con queso", price: 9.00 }
]
const menuDinner=[

      { name: "Escalope de ternera", price: 10.50 },
      { name: "Hamburguesa California", price: 6.75 },
      { name: "Hamburguesa con queso y chile ", price: 12.75 },
      { name: "Hamburgesa vegana", price: 9.50 },
      { name: "Ensalda de Bacon y pollo", price: 8.50 },
      { name: "Tacos de ternera con guacamole", price: 10.75 },
      { name: "Atun a la plancha", price: 12.00 }
]

  
const menuOffer=[
      { name:"Patatas fritas ", price: 5.75},
      { name:"Ensalda mixta", price: 6.50},
      { name:"Ensalda de col", price: 4.50},
      { name: "Patatas asadas", price: 6.75 },
      { name:"Ensalda pico de gallo", price: 4.00}
]
const commentVaultDesayuno = {
  "Buena eleccion": "Estan muy ricas",
  "Todos los productos son ecologicos": "Esta bien!, Una muy buena elección: enseguida le traigo su desayuno"
};

const commentVaultAlmuerzo = {
  "Bien escogido": "Esta muy rico",
  "Todos los productos son ecologicos": "ahora vengo con su pedido!, Una muy buena elección: enseguida le traigo la comida"
};
const commentVaultCena = {
  "Buena eleccion": "Esta muy bueno",
  "Todos los productos son ecologicos": "Esta bien, buena elección: enseguida le traigo su pedido"
};

const commentVaultOferta = {
  "Estupenda eleccion!": "perfecto como acompañamiento",
  "Muy buena eleccion!": "Muy bien!"
};
// Saludo

alert("¡Hola! Mi nombre es Maria y hoy seré su camarera.");

// Solicita al usuario que introduzca la hora actual en formato HH
let time = prompt("¿Podría por favor introducir la hora actual en formato HH (24 horas)?");
 if(time!==null&&time!==undefined){
          time=parseInt(time);
     
  
if (time >= 6 && time <= 11){
   alert("Hora de desayunar!"); 
    let mensajeDes = "Menú Desayuno: 'Que desea de nuestra carta desayuno?\n";
   for  (const item of menuBreakfast) {mensajeDes += `${item.name} - ${item.price.toFixed(2)}€\n`; 
  
                         
}
  window.prompt(mensajeDes);

  window.alert(commentVaultDesayuno[Object.keys(commentVaultDesayuno)[Math.floor(Math.random() * Object.keys(commentVaultDesayuno).length)]]);


}
  else if (time >= 12 && time <= 16){
    alert("Hora de almorzar!");
    let mensajeCom = "Menú Comida: Que desea tomar de nuestra carta?\n";
    for (const item of menuLunch) {mensajeCom += `${item.name} - ${item.price.toFixed(2)}€\n`;
                             
     
}
  window.prompt(mensajeCom);
  window.alert(commentVaultAlmuerzo[Object.keys(commentVaultAlmuerzo)[Math.floor(Math.random() * Object.keys(commentVaultAlmuerzo).length)]]);  
}
   
  else if (time >= 17 && time <= 22){
  alert ( "Hora de cenar!"); 
     let mensajeCen = "Menú Cena:Que desea de nuestra carta para cenar ?\n";
  for (const item of menuDinner) {mensajeCen += `${item.name} - ${item.price.toFixed(2)}€\n`;  
 
}
  window.prompt(mensajeCen);
  window.alert(commentVaultCena[Object.keys(commentVaultCena)[Math.floor(Math.random() * Object.keys(commentVaultCena).length)]]); 
 }
   let mensajeSide = "Hay una oferta:dos acompañamientos con su menú al mismo precio: Cuales desea añadir a su pedido?\n";
    for (const item of menuOffer) {mensajeSide += `${item.name} - ${item.price.toFixed(2)}€\n`;}
      window.prompt(mensajeSide);
       window.alert(commentVaultOferta[Object.keys(commentVaultOferta)[Math.floor(Math.random() * Object.keys(commentVaultOferta).length)]]); 
  
 }else{
    alert("El restaurante esta cerrado, vuelva pronto!");
  
 }
// enunciar la comanda :
// elementos elegidos nombres y precios
// Evitar errores al introducir los menus

//si piden desayuno, evita el error de mayusculas y minusculas y si no pone nada y minusculas y si no pone nada 
//vuelve a salir la ventana donde preguta que quieres desayunar *//

let peticionMenuDes = `Estos son los productos ordenados:\n${menuBreakfast}`;

if (peticionMenuDes === null) {
  peticionMenuDes = menu.find(obj => obj.name === peticionMenuDes.toLowerCase());
  }
 

if (peticionMenuDes === undefined) {
  alert("Error! Esta no es una opción válida");
  do {
    window.prompt(mensajeDes);
  } while (peticionMenuDes === undefined);
}
// si lo que pieden es comida estas son las opciones escojidas ,evita el error de mayusculas y minusculas y si no pone nada y minusculas y si no pone nada //vuelve a salir la ventana donde preguntar que quieres comer *// 

let peticionMenuCom = `Estos son los productos ordenados:\n${menuLunch}`;

if (peticionMenuCom === null) {
  peticionMenuCom = menu.find(obj => obj.name === peticionMenuCom.toLowerCase());
  }
 

if (peticionMenuCom === undefined) {
  alert("Error! Esta no es una opción válida");
  do {
    window.prompt(mensajeCom);
  } while (peticionMenuCom === undefined);
}
   alert (peticionMenuCom);
 //* si lo que pieden es comida estas son las opciones escojidas ,evita el error de mayusculas y minusculas y si no pone nada 
//vuelve a salir la ventana donde preguta que quieres cenar *//

let peticionMenuCen = `Estos son los productos ordenados:\n${menuDinner}`;

if (peticionMenuCen === null) {
  peticionMenuCen = menu.find(obj => obj.name === peticionMenuCen.toLowerCase());
  }
 

if (peticionMenuCen === undefined) {
  alert("Error! Esta no es una opción válida");
  do {
    window.prompt(mensajeCen);
  } while (peticionMenuCen === undefined);
}
    //* si escogen una oferta estas son las opciones escojidas ,evita el error de mayusculas y minusculas y si no pone nada 
//vuelve a salir la ventana donde pregunta que quieres del menu oferta *//

let peticionMenuOffer = `Estos son los productos ordenados:\n${menuOffer}`;

if (peticionMenuOffer === null) {
  peticionMenuOffer = menu.find(obj => obj.name === peticionMenuOffer.toLowerCase());
  }
 

if (peticionMenuOffer === undefined) {
  alert("Error! Esta no es una opción válida");
  do {
    window.prompt(mensajeSide);
  } while (peticionMenuCen === undefined);
}

// hacer los totales 
// segun la opcion elegida un precio y sumarlos todos al final


function peticionMenu (){
  let breakfast = peticionMenuDes;
  for (const item of peticionMenuDes) {
  mensajeCheck += `${item.name} - ${item.price.toFixed(2)}€\n`;
}
  let lunch = peticionMenuCom;
    for (const item of peticionMenuCom) {
  mensajeCheck += `${item.name} - ${item.price.toFixed(2)}€\n`;
      
  let dinner = peticionMenuCen;
    for (const item of peticionMenuCen) {
    mensajeCheck += `${item.name} - ${item.price.toFixed(2)}€\n`;
      
 let mensajeCheck = `Estos son los productos ordenados :\n`;
    
    
}
      alert (mensajeCheck);
      }
   }






