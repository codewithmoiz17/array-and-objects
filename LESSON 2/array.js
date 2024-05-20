/* Arrays: */

// It gives you the freedom to store more than one value. 
// In an array, you can only store one value. 
// You cannot give it two values like: 

// var a = 12,13 ❌
// array = group of values
// var = [12,13]


/* HOW ARRAYS ARE MADE BEHIND THE SCENE */

console.log(typeof ({}))
console.log(typeof ([]))

console.log(Array.isArray({}))
console.log(Array.isArray([]))

// NEGATIVE INDEX IN ARRAY: 

let myArray = [1, 2, 3, 4, 5];

console.log(myArray[-1])

/* Copying Reference Values */

// We copy reference values with the help of spread operator. 

var a = [1, 2, 3, 4, 5];
var b = [...a];

b.pop()

console.log(a)
console.log(b)

var obj = {name: "moizhussain"};
var copyobj = {...obj}

console.log(obj)
console.log(copyobj)

// Basic Array Methods:- 

var arr = [1,2,3,4,5,6,7];
arr.push(8) // adds 8 to the end of the array.
arr.pop() // removes 8 from the end of an array. 
arr.unshift(0) // adds 0 to the start of an array. 
arr.shift() // removes 0 from the start of an array.

/* splice */

arr.splice(2,1) // removes 3 from the arr


// OBJECTS: 

// Ek se ziada bando ki baat ki to hua Array, ek bande ke baare mein saari baat ki to hua object

var wrestlers = ["John Cena", "CM Punk", "Randy Orton", "AJ Styles"];

// 1) Blank Object 

var a = {}

// 2) Filled Object

var wrestler = { 
    name: "cm punk", 
    age: 45
}

// accessing value: 

// name = property 
// "cm punk" = value 

wrestler.name = "CM PUNK FOREVER"

// DELETING AN OBJECT

var a = {
    name: "Moiz Hussain", 
    age: 19
}

delete a.age; 
