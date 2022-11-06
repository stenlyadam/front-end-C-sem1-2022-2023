//Sinsu, Steve Hizkia William
console.log("Basic JavaScript");
//concat
let buah = ["durian", "anggur", "jeruk"];
let makanan = buah.concat(jeruk, apel);

//include

let str="ggmu"
str.includes("gg");//true
str.includes("mu");//false

//lenght

let trophy = ['ucl', 'premiere leauge'];
console.log(trophy.length); //output:2

//split
let str = "manchester is red";
let n = str.split("") ;

//substring

let str = "manchester is red";
let res = str.substring(9);

//toLowerCase
let str = "MANCHESTER IS RED";
let res = str.toLowerCase();
//toUpperCase
let str = "manchester is red";
let res = str.toLowerCase();
//trim
let str = "       manchester is red        ";
alert(str.trim());
//valueOf
let fruits = ["durian", "apel", "jeruk"];
let v=fruits.valueOf();


//pertemuan 4
console.log("Basic JavaScript");

let x = 5;
let y = 10;

// x = y;
x += y; //Sama saja dengan x = x + y
x++; //x = x + 1 atau x += 1

console.log("x = ", x);
console.log("y = ", y);

//Relational Operators

let bilangan1 = 5;
let bilangan2 = "5";

let hasil = bilangan1 === bilangan2;
console.log(hasil);

// let age = 17;
// let result = age >= 17 ? "Anda bisa bisa buat SIM" : "Anda blm bisa buat SIM";

console.log(false && true);
console.log(false || false);
console.log(!true);

//JavaScript Function

//Function Declaration
let age = 30; //Global scope

function greetings(firstName, lastName) {
  let grade = 100; //Local Scope (Function)
  let string1 = "Hello " + firstName + " " + lastName;
  let string2 = "Umur saya " + age + " tahun.";

  if (grade > 91) {
    var index = 4; //Local scope (Block)
  }
  console.log(index);

  return string1 + string2;
}

let result2 = greetings("John", "Doe");
console.log(result2);

//Function expression
// greetings2();

// let greetings2 = function () {
//   console.log("Hello World 2");
// };