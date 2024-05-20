/* FUNCTION */

// 1) Function is used when you don't want to run the code directly.

console.log("hello") // here the code runs directly. 

function sayHello() {
    console.log("hello")
}

sayHello() // it runs only for we call it for execution.

// 2) Function is used when you want to reuse the code.  

sayHello() // I can reuse it. 
sayHello()
sayHello()

// 3) Function is used to run the code with different data. 

function ab(a, b, c) { // parameters
    console.log(a, b, c)
}

ab(12, 13, 14) // arguments

// arguments = real values 
// parameters = variables 