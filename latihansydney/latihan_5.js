//Rest Parameter
//Berguna untuk menggabungkan semua parameter pada function ke dalam array.
const sum = (...sydney) => {
    let result = 0
    sydney.filter(el => result = result + el)
    return result
}
    console.log(sum(1, 2, 3))

    //return 5
    //menggabungkan semua parameter pada function ke dalam array.

//spread operator
//Digunakan untuk membagi operator elemen array atau properti pada objek, sehingga elemen array dapat di tambahkan/dimasukan ke dalam array baru.
const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4, 5]

console.log(...numbers)
// return [1, 2, 3, 4, 5]
//Digunakan untuk dapat di tambahkan/dimasukan ke dalam array baru.

//destructuring
//Bertugas untuk memecah komponen yang kompleks menjadi komponen yang lebih kecil
let orang = ["Mario", "Putri", "Yesha", "Janna"];
    
let orang1 = orang[0];
let orang2 = orang[1];
let orang3 = orang[2];
let oramg4 = orang[3];

console.log(orang1);
console.log(orang2);
console.log(orang3);
console.log(orang4);