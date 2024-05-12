import * as lodash from "https://cdn.skypack.dev/lodash@4.17.21";

//*Build out a Diner menu in JAVASCRIPT.
//Bottega Diner

// variables
const menuBreakfast=[
      { name: "croisant", price: 7.95 },
      { name: "tostadas", price: 12.85 },
      { name: "bagel", price: 12.75 },
      { name: "galletas", price: 8.95 },
      { name: "cereales", price: 15.65 },
]
const menuLunch=[
      { name: "sandwich club", price: 16.25 },
      { name: "sandwich pavo", price: 10.75 },
      { name: "salmon ahumado  ", price: 11.50 },
      { name: "ensalada simple", price: 8.50 },
      { name: "ensalada mejicana ", price: 8.75 },
      { name: "hamburguesa queso", price: 9.00 }
]
const menuDinner=[

      { name: "hamburguesa california", price: 6.75 },
      { name: "hamburguesa rock ", price: 12.75 },
      { name: "hamburgesa vegana", price: 9.50 },
      { name: "ensalada bacon ", price: 8.50 },
      { name: "tacos", price: 10.75 }
   
]
const menuDrink=[
      { name:"cafe", price: 5.75},
      { name:"refresco", price: 6.50},
      { name:"zumo", price: 4.00}
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

const commentVaultBebida = {
  "Estupenda eleccion!": "perfecto como acompañamiento",
  "Muy buena eleccion!": "Muy bien, enseguida le traigo el pedido"
};
// Saludo

alert("¡Hola! Mi nombre es Maria y hoy seré su camarera.");

// Solicita al usuario que introduzca la hora actual en formato HH

let time = prompt("¿Podría por favor introducir la hora actual en formato HH (24 horas)?");
if (time==null&&time==undefined) {

    alert("Has introducido un valor incorrecto!");
    prompt("¿Podría por favor introducir la hora  ?");
  
} else if (time >= 6 && time <= 11){
   alert("Hora de desayunar!"); 
    
    let mensajeDes = "Menú Desayuno: 'Que desea de nuestra carta desayuno?\n";
    for  (const item of menuBreakfast) {mensajeDes += `${item.name} - ${item.price.toFixed(2)}€\n`;
                                        
                                        
} 
  window.alert(mensajeDes);
 
   
      let CartaMenuDrink = menuDrink.map(element => `${element.name}-${element.price.toFixed(2)}€\n`);
      alert(`la carta de bebidas es:\n${CartaMenuDrink}`);

      const CartaBebidaFinal = window.prompt("¿Qué desea de nuestra carta de bebidas?\n");
      const MontoBebida = menuDrink
      .filter(menu => menu.name === CartaBebidaFinal)
      .map(element => parseFloat(element.price))
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
      alert(`El monto a pagar por ${CartaBebidaFinal}, es de ${MontoBebida}€.`);
 

   
  
      let CartaMenuBreakfast = menuBreakfast.map(element => `${element.name} ${element.price.toFixed(2)}€\n`);
        alert(`Las opciones para desayuno son los siguientes:\n${CartaMenuBreakfast}`);

      const CartaDesayunoFinal = window.prompt("¿Qué desea de nuestra carta?\n");
      const MontoDesayuno = menuBreakfast
      .filter(menu => menu.name === CartaDesayunoFinal)
      .map(element => parseFloat(element.price))
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
  
     window.alert(commentVaultDesayuno[Object.keys(commentVaultDesayuno)[Math.floor(Math.random() * Object.keys(commentVaultDesayuno).length)]]);
     alert(`El monto a pagar por ${CartaDesayunoFinal} es de ${MontoDesayuno}€.`);
  
  // Hacer la suma de las comandas de desyuno mas su bebida correspondiente 
  
    function SumTotal(montoBebida, montoDesayuno) {
       return montoBebida + montoDesayuno;
      }
    const total = SumTotal(parseFloat(MontoBebida), parseFloat(MontoDesayuno));
    alert(`El total de su pedido es de :\n Platos comanda: \n ${CartaDesayunoFinal}.......${MontoDesayuno}€\n${CartaBebidaFinal}.......${MontoBebida}\n Total.... ${total.toFixed(2)}€.`);



  
  } else 
    if (time >= 12 && time <= 16){
    alert("Hora de almorzar!");
    let mensajeCom = "Menú Comida: Que desea tomar de nuestra carta?\n";
    for (const item of menuLunch) {mensajeCom += `${item.name} - ${item.price.toFixed(2)}€\n`;
                             
   
}
  window.alert(mensajeCom);
 
      
      let CartaMenuDrink = menuDrink.map(element => `${element.name} ${element.price.toFixed(2)}€\n`);
        alert(`La carta de bebidas es :\n${CartaMenuDrink}`);

      const CartaBebidaFinal = window.prompt("¿Qué desea de nuestra carta de bebidas?\n");
      const MontoBebida = menuDrink
      .filter(menu => menu.name === CartaBebidaFinal)
      .map(element => parseFloat(element.price))
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
      alert(`El monto a pagar por ${CartaBebidaFinal}, es de ${MontoBebida}€.`);
      
      window.alert(commentVaultBebida[Object.keys(commentVaultBebida)[Math.floor(Math.random() * Object.keys(commentVaultBebida).length)]]);

      
      let CartaMenuLunch = menuLunch.map(element => `${element.name} ${element.price.toFixed(2)}€\n`);
        alert(`Los menús para almorzar son los siguientes:\n${CartaMenuLunch}`);

      const CartaComidaFinal = window.prompt("¿Qué desea de nuestra carta?\n");
      const MontoComida = menuLunch
      .filter(menu => menu.name === CartaComidaFinal)
      .map(element => parseFloat(element.price))
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
     window.alert(commentVaultAlmuerzo[Object.keys(commentVaultAlmuerzo)[Math.floor(Math.random() * Object.keys(commentVaultAlmuerzo).length)]]);
      alert(`El monto a pagar por ${CartaComidaFinal}, es de ${MontoComida}€.`);
      
      
// Hacer la suma de las comandas de la comida y bebida correspondiente
  
  
       function SumTotal(montoBebida, montoComida) {
       return montoBebida + montoComida;
      }
       const total = SumTotal(parseFloat(MontoBebida), parseFloat(MontoComida));
        alert(`El  total de su pedido es de :\n Platos comanda: \n ${CartaComidaFinal}.......${MontoComida}€      \n${CartaBebidaFinal}.......${MontoBebida}\n Total.... ${total.toFixed(2)}€.`);
      

} else if (time >= 17 && time <= 22){
   alert ( "Hora de cenar!");
     let mensajeCen = "Esta es nuestra carta para la cena\n";
      for (const item of menuDinner) {mensajeCen += `${item.name} - ${item.price.toFixed(2)}€\n`;  
  }
  
 
      window.alert(mensajeCen);
  
   
   
      let CartaMenuDrink = menuDrink.map(element => `${element.name} ${element.price.toFixed(2)}€\n`);
      alert(`La carta de bebidas es :\n${CartaMenuDrink}`);

      const CartaBebidaFinal = window.prompt("¿Qué desea de nuestra carta de bebidas?\n");
      const MontoBebida = menuDrink
      .filter(menu => menu.name === CartaBebidaFinal)
      .map(element => parseFloat(element.price))
      .reduce((a, b) => a + b, 0)
      .toFixed(2);  
      alert(`El monto a pagar por ${CartaBebidaFinal}, es de ${MontoBebida}€.`);
      
      window.alert(commentVaultBebida[Object.keys(commentVaultBebida)[Math.floor(Math.random() * Object.keys(commentVaultBebida).length)]]);
  
  
  
      let CartaMenuDinner = menuDinner.map(element => `${element.name} ${element.price.toFixed(2)}€\n`);
      alert(`Estos son los menus para la cena :\n${CartaMenuDinner}`);

      const CartaCenaFinal = window.prompt("¿Qué desea de nuestra carta?\n");
      const MontoCena = menuDinner
      .filter(menu => menu.name === CartaCenaFinal)
      .map(element => parseFloat(element.price))
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
  
     window.alert(commentVaultCena[Object.keys(commentVaultCena)[Math.floor(Math.random() * Object.keys(commentVaultCena).length)]]);
  
      alert(`El monto a pagar por ${CartaCenaFinal}, es de ${MontoCena}€.`);
  
  // Hacer la suma de las comandas de la comida y bebida correspondiente

       function SumTotal(montoBebida, MontoCena) {
       return montoBebida + MontoCena;
      }
       const total = SumTotal(parseFloat(MontoBebida), parseFloat(MontoCena));
          alert(`El total de su pedido es de :\n Platos comanda: \n ${CartaCenaFinal}.......${MontoCena}€      \n${CartaBebidaFinal}.......${MontoBebida}\n Total.... ${total.toFixed(2)}€.`);
     
   
  
 }else  (time >=23 &&time<=5)

      window.alert("El restaurante esta cerrado, vuelva pronto!");

      window.alert('Gracias por elegirnos. ¡Que tenga un buen día!');




     
 

 






