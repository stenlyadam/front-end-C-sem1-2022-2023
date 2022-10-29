// Rest Parameter & Spread Operator

//Rest Paremeter
 const anak =(chil1, chil2, ...chils) =>{
    console.log("anak pertama",chil1);
    console.log("anak kedua",chil2);
    console.log("anak yang sisa",chils);
 }
 anak("majesty","faith","fab","gede","biya","dio");
//rest parameter adalah paramer yang di gunakan pada fungsi. ini menampiilkan nilai sisa yang belum di petakan 
// rest paramer hanya bisa di taruh di belakang, karena hanya mengambil bagian sisa saja
//spread Operator
let numbers =[1,2,3,4,5,6]
console.log(...numbers);

let number =[10,11,12,13,14,15]
number[3]=11;
let number2 = [...number];

console.log("number1 :",number);
console.log("number2 :",number2);

let angka1=[1,2,3,4,5];
let angka2=[6,7,8,9,10];
let angka3=[11,12,13,14,15];

let gabunganAngka =[...angka1,...angka2,...angka3];
console.log(gabunganAngka);
//memecahh elemen dalam array menjadi elemen yang terpisah



//Destructuring
let person= ["majesty", "Mitra", 13, true]
let [Nama, Asal, Umur, Menikah]=person;

console.log("Nama:",Nama);
console.log("Asal:",Asal);
console.log("Umur:",Umur);
console.log("Status Menikah;",Menikah);
//mempermudah unutk mengolah nilai dari array maupun properti pada objek