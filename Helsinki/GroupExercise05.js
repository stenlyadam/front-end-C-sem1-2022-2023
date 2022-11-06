//contoh1
const animal = (...params) => {  //"...params" adalah rest parameter yang berfungsi untuk menampilkan semua argumen yang berada dalam parameter
    console.log(params);
}
animal("anjing", "Babi", "Cacing");

// //contoh2
const warna = (param1,param2, ...params) => {
    console.log("Argument pertama ", param1);
    console.log("Argument kedua ", param2);
    console.log("Argument ketiga ", params);
}
warna("merah", "putih", "black", "green","purple");
//output
//Argument pertama  merah
//Argument kedua  putih
//Argument ketiga  [ 'black', 'green', 'purple' ]

//penjelasan
//argument pertama dan kedua menggunakan  parameter biasa
//argument ketiga menggunakan elipsis atau rest parameter sehingga menampilkan semua isi argument terakhir 

//contoh3
const color = (param1,...params, param2) => {
    console.log("Argument pertama ", param1);
    console.log("Argument kedua ", params);
    console.log("Argument ketiga ", param2);
}
color("merah", "putih", "black", "green","purple");
//output
//SyntaxError: Rest parameter must be last formal parameter

//penjelasan
//mengapa error?, karena elipsis tidak bisa berada di tengah parameter atau di depan. 
//elipsis hanya bisa digunakan di akhir parameter

//contoh4
let arrayBilangan = ["semmy", 69];
//tanpa spread operator
console.log(arrayBilangan);
//output
//[ 'semmy', 69 ]

//kalau menggunakan spread operator
console.log(...arrayBilangan);
//output
//semmy 69

//penjelasan
//jadi perbedaan antara tidak menggunakan spread dan menggunakan spread terdapat pada output.
//jika tidak menggunakan spread, maka output yg ditampilkan adalah array
//sedangkan menggunakan spread, maka output yg ditampilkan bukan lagi array

//contoh5
let arrayAsli = ["semmy", 69];
let arrayDuplikat = [...arrayAsli];
console.log(arrayDuplikat);
//output
//[ 'semmy', 69 ]
//penjelasan
//hanya menduplikat arrayAsli\

//contoh6
let binatang = {
    jenis : "anjing",
    umur : 2
};
//untuk menambahkan beberapa properti lainnya
binatang.ras = "huskie"
binatang.warna = "green"

console.log(binatang.ras);
//output
//huskie

//penjelasan 
//output dapat dipilih oleh user

//contoh7
const objek1 = {a: 1, b: 2};
const objek2 = {c: 3, d: 4};
const objekGabungan = {...objek1, ...objek2};
console.log(objekGabungan);
//penjelasan
//menggabungkan semuanya dengan sepasang kurung kurawal

//Destructuring
//contoh8
let dosen = ["Stenly", "sahulata", "green", "debby"]

let dosen1 = dosen[0];
let dosen2 = dosen[1];
let dosen3 = dosen[2];

console.log(dosen1);
console.log(dosen2);
console.log(dosen3);
//output
// Stenly
// sahulata
// green

//penjelasan 
//menyimpan nilai dari masing-masing element dari sebuah array ke dalam variabel