console.log('Hello World!');
console.log('This is an example of a js file!');

console.log('It demonstrates basic logging functionality.');

var x = 10;
x = "Hello"; // This is allowed in Js
console.log(x);

let y = 200;
//let y = 300; //This will cause an error
{
    let y = 20;
    x = 300;
    y = 30; // this is allowed with let
    console.log(y);
}

console.log(typeof 100);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});

//function declaration
function add(a,b) {
    return a + b;
}

console.log(add(5,10));
console.log(typeof add); // "function"

//function expression
add = function(a,b) {
    return a + b;
}

//arrow function
add = (a,b) => {
    return a + b;
}

add = (a,b) => a * b;
x = x => x + 10;
x = a => a + 1
y = () => 1000

//Constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
}

console.log(Student);
//"function" prototype
Student.prototype.study = function(subject) {
    console.log(`${this.name} is studying ${subject}`);
}

console.log(typeof Student); //function
var s1 = new Student("Ricki", 21);
console.log(s1.greet());

//Object Literal
employee = {
    name: "Ricki",
    age: 21,
    "city name": "New York",
    100: "This is a number key",
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
}

console.log(typeof employee); //"object"
employee.greet();
console.log(employee['age']);
console.log(employee['city name']);
console.log(employee['100']);

