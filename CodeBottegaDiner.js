//*Build out a Diner menu in JAVASCRIPT.
//Bottega Diner
//Have the Main Menu and a Sides Menu
const mainMenu = {
  "Bottega Burger": 10.85,
  "Cris Burger with Spanish ham and cheese": 11.50,
  "Smoked Salmon Salad": 17.85
};

const sideMenu = {
  "French Fries": 2.95,
  "Coleslaw": 5.50,
  "Bacon Mashed Potatoes": 4.50
};

const commentVault = {
  "Thats a good one": "All right then",
  "Good choice": "Very good!"
};


const greetingVault = {
  "Did you you what you want!": "Today is a perfect day for a good meal",
  "Are your ready today!": "I hope your are hungry today"
};

//You get one entree and two side choices at regular cost.
alert("Hi! My name is Cris: Welcome to Bottega Diner. I will be your server today. How are you today?");
alert(greetingVault[Object.keys(greetingVault)[Math.floor(Math.random() * Object.keys(greetingVault).length)]]);

//You get one entree and two side choices at regular cost.
//- show them the entire menu (print out)
//- A user selects an entree.
alert("Here is our menu. By the way, you have two sides with your meal:\n" + JSON.stringify(mainMenu) + "\n" + JSON.stringify(sideMenu));

//- “Waitress” makes a comment based on their selection
//- comment can either be a comparison of the two items, or random comment pulled from a comment vault.
const userMain = prompt("What would you like today from our main courses?\n" + JSON.stringify(mainMenu));

alert(commentVault[Object.keys(commentVault)[Math.floor(Math.random() * Object.keys(commentVault).length)]]);

const userSide = prompt("What would you like today from our side courses?\n" + JSON.stringify(sideMenu));
const userSideTwo = prompt("And for your second side?\n" + JSON.stringify(sideMenu));

alert(commentVault[Object.keys(commentVault)[Math.floor(Math.random() * Object.keys(commentVault).length)]]);
//- Tell them the price
alert("Are you ready for the bill today?");

const totalCost = mainMenu[userMain] + sideMenu[userSide] + sideMenu[userSideTwo];
alert("Your total cost is $" + totalCost);

//- total up the cost
const descCost =  mainMenu[userMain] + sideMenu[userSide];
alert ("But today your discounted total will be $ "+ descCost);

alert("Thank you for coming to Bottega Diner. Have a nice day!");




