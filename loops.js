/* IMPORTANT LOOPS */

/* For Each Loop: It works on ARRAYS. */

// It never changes the array itself.
// It makes the changes on temporary copy of ARRAY.

var a = [1, 2, 34, 567, 7, 3];

a.forEach(function (val) {
    console.log(val + 1)
})


/* For In Loop: It works on OBJECTS */

var obj = {
    name: "Moiz Hussain",
    age: 19,
    city: "Karachi"
}

for (var key in obj) {
    console.log(key, ": " + obj[key])
}

/* NOT IMPORTANT LOOP */

// Do While Loop:- 


var c = 12;


do { 
    console.log("hello");
    c++
}

while(c <  15);       