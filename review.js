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
let bVariable = '023'
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
// console.log(xxxxx);

// Create a string and make it return true using startsWith()
// console.log(xxxxx);

// Now use any variable with endsWith() and return false
// console.log(xxxxx);

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, '
// console.log(xxxxx);

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
// console.log(xxxxx);

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.
const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
// console.log(xxxxx);

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
// console.log(xxxxx);

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
// console.log(xxxxx);

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
// console.log(xxxxx);

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
// console.log(xxxxx);

// Now using the pizza sentence, return only pizza (before the comma)
// console.log(xxxxx);

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"
// console.log(xxxxx);

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
// console.log(xxxxx);

// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
// console.log(xxxxx);

// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
// console.log(xxxxx);

// substring()
// on the chopping block...
// console.log(xxxxx);

// Returns "ell"
const basicGreeting = "Hello World"
// console.log(xxxxx);

// Returns "JavaScript"
const ohReally = "JavaScript Substring"
// console.log(xxxxx);

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
// console.log(xxxxx);

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
// console.log(xxxxx);

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// console.log(xxxxx);

// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

// console.log(a _ b)
// console.log(c _ b)
// console.log(d _ d)
// console.log(d _ a)
// console.log(a _ 15)
// console.log(a _ b _ c)
// console.log(c _ b _ a _ d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
// console.log(xxxxx);

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
// console.log(xxxxx);

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
// console.log(xxxxx);

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 
// console.log(xxxxx);

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
}
// console.log(xxxxx);

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']
// console.log(xxxxx);

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
// console.log(xxxxx);

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']
// console.log(xxxxx);

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push()
// pop()
// unshift()
// shift()
// concat()
// splice()
// slice()
// sort()
// includes()
// indexOf()
// length

const fruits = ['apple', 'banana', 'orange']

// Print banana
// console.log(xxxxx);

// Let's turn it up a notch. I won't tell you what array methods to use. 
// console.log(xxxxx);

// Join all the elements of the array into a string separated by a space.
// console.log(xxxxx);

// Remove orange
// console.log(xxxxx);

// Add strawberry, kiwi, and grapes at the end
// console.log(xxxxx);

// Remove apple
// console.log(xxxxx);

// Add mango at the beginning of the array
// console.log(xxxxx);

// Add lemon, and grapefruit between mango and banana
// console.log(xxxxx);

// Remove banana and strawberry
// console.log(xxxxx);

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
// console.log(xxxxx);

// Print the last two exotic fruits without altering the newly concatenated array.
// console.log(xxxxx);

// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
// console.log(xxxxx);

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
// console.log(xxxxx);

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
// console.log(xxxxx);

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
// console.log(xxxxx);

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
