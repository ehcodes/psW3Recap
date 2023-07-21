/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let aVariable = '1';
console.log(aVariable);

// 2.) Change the value of this variable
aVariable = '2'
console.log(aVariable);

// 3.) Change the data type of this variable
aVariable = Number(aVariable);
console.log(aVariable);

// 4.) Create another variable and the one from above to concatenate
let bVariable = '023';
console.log(aVariable+bVariable);

// 5.) Use any of the variables above or create new ones and print using string interpolation
console.log(`This year is ${aVariable}${bVariable}.`);

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
console.log('Sabrina'.charAt(4));

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
/* unicode is an accepted standard for translating/encoding binary code into human readable text and emojis.*/
console.log('Teddy'.charCodeAt(2));

// Using fromCharCode() - make it readable for us :). You'll see!

console.log(String.fromCharCode(66, 111, 114, 105, 107, 233, 110));

// Take your first and last name and concat()
console.log('Engrid'.concat(" ","Hernandez"));

// Create a string and make it return true using startsWith()
console.log('howdy'.startsWith('h'));

// Now use any variable with endsWith() and return false
console.log('howdy'.startsWith('h'));

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, got bored, and went to bed.';
console.log(ozgur.includes('bed'));

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone.";
console.log(joshHadALittleLambOopsCow.indexOf('cow'));

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.
const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace.";
console.log(vanessa.lastIndexOf('Vanessa'));

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?";
console.log(noWeCantTeo.length);

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!";
console.log(replaceGokuWithVegeta.replace('Goku','Vegeta'));

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4";
console.log(joshIsLookingForWifey.search('wifey'));

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
/* .slice() is incluive of the starting index*/
const pizzaSentence = "pizza, other half of pizza";
console.log(pizzaSentence.slice(7));

// Now using the pizza sentence, return only pizza (before the comma)
/* .slice() is incluive of the ending index*/
console.log(pizzaSentence.slice(0,5));

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill.
// Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn";
console.log(splitTheBill.split(', '));

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces.
// Using splitTheBill, return an array separating all three by characters.
console.log(slicedAndDiced = [...splitTheBill]);

// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS.";
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
console.log(tuansAngry = angry.toLocaleLowerCase());

// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun";
console.log(thatsNotTheSaying = jahlunSaidToPutSomeRespectToHisName.toUpperCase());

// substring()
// on the chopping block...
/* .substring() is NOT incluive of the starting index*/
/* .substring() is NOT incluive of the ending index*/

// Returns "ell"
const basicGreeting = "Hello World";
console.log(basicGreeting.substring(1,3));

// Returns "JavaScript"
const ohReally = "JavaScript Substring";
// console.log(xxxxx);

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com";
// console.log(xxxxx);

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
let acceptance = '      loving yourself as you are      ';
console.log(acceptance);
console.log(selfRejection = acceptance.trim());

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
console.log((true)? true : false); // I'm realizing this probably wasn't a task but the deed is done, so here you go!

// Replace the underscores.
const a = 5;
const b = 10;
const c = 15;
const d = "Keke";

// console.log(a _ b)
console.log(a < b);
// console.log(c _ b)
console.log(c > b);
// console.log(d _ d)
console.log(d === d);
// console.log(d _ a)
console.log(d !== a);
// console.log(a _ 15)
console.log(a < 15);
// console.log(a _ b _ c)
console.log(a < b < c);
// console.log(c _ b _ a _ d)
console.log(c > b > a !== d);

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. 
// Make Ken's room spin 10 times using FOR LOOP. 
// Make them print a sentence.
for(let i = 0;i<11;i++){
  console.log(`${i}: Will the spinning ever end?!`);
}
// Harry said that was so mean of Teo to do Ken dirty like that.
// Make Teo's vision spin 20 times FOR LOOP.
let roomSpinCount=0;
for(let i = 0;i<20;i++){
  roomSpinCount++;
  console.log(roomSpinCount);
}

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
roomSpinCount=0;
while (roomSpinCount<20) {
  roomSpinCount++;
  console.log(`${roomSpinCount}: I'm sorry!`);
}
// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
}

for(const thing in whateverQueenBeySaid){
  console.log(thing);
}

// Using (FOR IN LOOP), print the indexes of the array.
/* today I learned that for...in loops return the key/index of the object/array it is iterating over */
const lana = ['l', 'a', 'n', 'a'];

for(const index in lana){
  console.log(index);
}

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner'];

for(const index of tia){
  console.log(tia.indexOf(index));
}

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas.
// Inside the function, create a variable with the string "PS".
// Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan'];
function printPS(arr){
  const ps='PS';
  perscholas.forEach((el)=>{
    console.log(`${ps} ${el}`);
  })
}
printPS(perscholas);

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do

/* push() -  moves an object to the end of an array*/
/* pop() -  removes an object from the end of an array */ 
/* unshift() -  moves an object to the beginning of an array */ 
/* shift() - removes an object from the beginning of an array */ 
/* concat() - smooshes multiple arrays and/or objects together; returns new array */ 
/* splice() - can be used to replace, delete, add or remove elements from an array */ 
/* slice() - can be used to make a copy of an array and then replace, delete, add or remove elements from the copied array */ 
/* sort() - reorders the elements of an array, sorting them by converting them to strings and then sorting by their unicode point value */ 
/* includes() - checks if the provided argument is in the array; returns true or false. */ 
/* indexOf() - returns the index of the provided argument; returns -1 if provided argument does not exist in array. */ 
/* length - returns the (length) number of objects in array */ 

const fruits = ['apple', 'banana', 'orange'];

// Print banana
console.log(fruits[1]);

// Let's turn it up a notch. I won't tell you what array methods to use. 
// Join all the elements of the array into a string separated by a space.
console.log(fruits.join(' '));

// Remove orange
fruits.pop();
console.log(fruits);

// Add strawberry, kiwi, and grapes at the end
fruits.push('strawberry','kiwi','grapes');
console.log(fruits);

// Remove apple
fruits.shift();
console.log(fruits);

// Add mango at the beginning of the array
fruits.unshift('mango');
console.log(fruits);

// Add lemon, and grapefruit between mango and banana
fruits.splice(1,0,'lemon','grapefruit');
console.log(fruits);

// Remove banana and strawberry
fruits.splice(3,2);
console.log(fruits);;

// Create a new array called exoticFruits. 
// Add 3 exotic fruits inside of this array.
// Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
const exoticFruits = ['zapote','quinepas','percha'];
const spreadFruits = [...exoticFruits,...fruits];
const concatFruits = fruits.concat(exoticFruits);
console.log(exoticFruits);
console.log(spreadFruits);
console.log(concatFruits);

// Print the last two exotic fruits without altering the newly concatenated array.
console.log(concatFruits.slice(concatFruits.length-2,concatFruits.length));
console.log(concatFruits);

// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"];
console.log(monalissaIsMessy.sort());

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"];
console.log(mirrorMirrorOnTheWall.reverse());

// ===== HIGHER ORDER METHODS =====
// Rafael said he's trying to stop cursing so much, and he wants to start with his text messages. 
// Help him write code to eliminate the badword in his sentences. Must return a string sentence.
// Must use filter(). :) 
const rafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food.";
console.log(rafaelNoBadWords.split(" ").filter(word => word != 'badword').join(" "));

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231];
const addedVals = 0;
console.log(numbersToAddUp.reduce((prevVal,currVal) => prevVal+currVal,addedVals));

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
// console.log(xxxxx);

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
// console.log(xxxxx);

// Using the variable with the newly connected arrays, use spread operator to add something at the end.
// console.log(xxxxx);

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
// console.log(xxxxx);

// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
// console.log(xxxxx);

// Tosi wants ihatethis. :) Print!
// console.log(xxxxx);

// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'
// console.log(xxxxx);

// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
// console.log(xxxxx);

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
// console.log(xxxxx);

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
// console.log(xxxxx);


// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
// console.log(xxxxx);

// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts
// console.log(xxxxx);

// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
// console.log(xxxxx);

// Create a function expression with your first name as the variable and then print your first and last name
// console.log(xxxxx);

// Create an arrow function that accepts a number and have it return that number doubled
// console.log(xxxxx);

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.
// console.log(xxxxx);




// Access the name using dot notation
// console.log(xxxxx);


// Access the age using square brackets
// console.log(xxxxx);

// Use object destructuring to access location
// console.log(xxxxx);

// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}
// console.log(xxxxx);

// Print overgrow
// console.log(xxxxx);

// Print cut
// console.log(xxxxx);

// Print Bulbahhhh!!!!!
// console.log(xxxxx);


// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
// console.log(xxxxx);

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
// console.log(xxxxx);

// Print an array that contains every single properties in bulbasaur
// console.log(xxxxx);

// Print every single properties one by one in the console
// console.log(xxxxx);

// Print an array that contains every single values in bulbasaur
// console.log(xxxxx);
