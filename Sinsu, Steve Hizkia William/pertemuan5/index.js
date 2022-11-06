let person = [
    {
      name: "John",
      age: 35,
    },
    {
      name: "Bill",
      age: 23,
    },
    {
      name: "Bob",
      age: 17,
    },
    {
      name: "Jack",
      age: 20,







      
    },
  ];
  
  /*
      Buatlah program yang menampilkan siapakah yang memiliki
      umur paling tua dan umur paling muda
  */

let max = person[0];
let min = person[0];

for(let i=0; 1, person.length; i++){
    if (person[i].age>max.age){
        max=person[i];
    }
    if(person[i].age<min.age){
        min=person[i];
    }
}

console.log("si paling tua :", max.name);
console.log("si paling muda : ", min.name);