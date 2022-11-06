console.log("Group Exercise : Rest Parameter, Spread Operator, Destructuring");
console.log("By Tokyo");

//Rest Parameter examples 

//1. 
/*Merupakan sintaks yang memungkinkan sebuah fungsi menerima argumen dalam jumlah yang tak terbatas atau dinamis. 
Semua fungsi yang diterima akan dimasukkan ke array.*/
const myTim = (...args) => { //Walaupun kita hanya mengirim satu argumen, nilainya tetap akan masuk ke dalam array
    console.log(args);
  };
  myTim(2, 3, 4, 5);

//2.
const foo = (...params) => { //Parameter yang diawali dengan elipsis menandakan ia adalah sebuah rest parameter.
    console.log(params);
}
  
foo("virjinia", "brenda", "natal"); // Output: ["virjinia", "Brenda", "natal"]
//parameter tersebut berisi semua nilai argument yang kita berikan pada saat pemanggilan fungsi foo.
//sebuah fungsi dengan satu parameter berupa rest parameter dipanggil dan diberikan satu atau lebih argument
//rest parameter-nya akan mewakili semua argument-argument tersebut

const absent = (...ai) => { 
    console.log("Selalu Alpa",ai);
  }
  absent("Vito", "Erick", "Clement", "Alo", "Utu", "Yanto");
  
  
 // REST PARAMETER DIGUNAKAN SEBAGAI PARAMETER TERAKHIR 
const absensi = (a1, a2, a3, ... aa) => {
    console.log("Hadir",a1);
    console.log("Hadir",a2);
    console.log("Hadir",a3);
    console.log("Tidak Hadir ",aa);
    }  
  absensi("Vito", 10, "Clement", "Alo", "Utu", "Yanto");

//3.
const args = (nama1,nama2, ...nama) => { //Rest Parameter ini ditempatkan diakhir agar mewakili parameter yang tidak mendapat bagian
    console.log("Nama Pertama",nama1); //Akan menampilkan Vannesa
    console.log("Nama Kedua ", nama2); //Akan menampilkan Mia
    console.log("Sisa Nama", nama);
}
args("Vannesa","Mia","Pretty","Anjelita","Natalia","Syalom"); // Dalam hal ini Pretty-Syalom akan termasuk dalam sisa data.


//Spread Operator examples

//with Array 
//1. 
//Memakai spread operator kita bisa membentangkan nilai – nilai dalam array itu.
const favorites1 = ["Bakso", "Mie", "Roti", "Soup"];
console.log(...favorites1);

//Spread operator bekerja seperti meleburkan nilai array jadi beberapa elemen sesuai dengan panjang nilai array-nya

const favorites2 = ["Bakso", "Mie", "Roti", "Soup"];
const others = ["Susu", "Pia", "Donat"];
const allFavorites = [...favorites2, ...others]
console.log(allFavorites);
// Jadi dengan menggunakan spread operator bisa menggabungkan nilai dari dua array

//2. 
let jurusan = ['sistem informasi', 'informatika'];
let jurusanBaru =['teknik sipil', ...jurusan]; // menyisipkan atau menambahkan nilai array baru dalam nilai array jurusan

console.log(jurusanBaru);// output :  teknik sipil, sistem informasi, informatika

//3. 
let kelas = ['IPA', 'IPS'];
let kelasBaru =['BAHASA', ...kelas]; // menyisipkan atau menambahkan nilai array baru dalam nilai array kelas

console.log(kelasBaru);// output : IPA, IPS, BAHASA

function sum(a, b, c){ 
    return a * b + c;    
  } 
  const angka = [25, 50, 100];
  console.log(sum(...angka));

//with Object 
//1. 
const biodata1= {Nama : "Jeno", Umur: 22};
const biodata2 = {JenisKelamin : "Laki-laki", Pekerjaan : "Artis"};// menyisipkan atau menambahkan object baru dalam object lain
const Biodata = {...biodata1, ...biodata2};

console.log(Biodata);//output =  Nama : Jeno, Umur : 22, Jenis kelamin : Laki-laki, Pekerjaan : Artis

//2. 
const nomor1 = {a: 1, b: 2};
const nomor2 = {c: 3, d: 4};
const nomor3 = {e: 5, f: 6};//// menyisipkan atau menambahkan object baru dalam object lain
const nomor = {...nomor1, ...nomor2, ...nomor3};

console.log(nomor);//output =  a:1, b: 2, c:3, d:4, e:5, e:6
//spread operator memisahkan/memecahkan.
//memecah sebuah array menjadi element-elementnya


//Destructuring examples
//Array
//1. 
//Memecah komponen / elemen yang komplek menjadi komponen / elemen
//yang lebih kecil. Bertujuan untuk mempermudah pengelolaan data.
const arrTim = ['Tokyo', 'Vannesa', 6, true];
// line ini akan mengassign nilai dari array ke variable" yang telah ditentukan
// pemberian array akan berurut susai index dari array
const [namaTim, ketuaTim, jumAngg, isFrontEndClass] = arrTim;
console.log(namaTim, ketuaTim, jumAngg, isFrontEndClass);

// jika hanya ingin memecah nilai untuk variable tertentu dapat dituliskan sebagai berikut
const [ketua, , anggota] = arrTim;
console.log(ketua, anggota);

//2. 
//Destructuring memudahkan untuk mengekstrak apa yang dibutuhkan.
//Saat mendestrukturisasi array, urutan variabel yang dideklarasikan adalah penting.
//cara baru untuk menetapkan item array ke variabel:
const trans = ['Jazz', 'Honda', 'United'];
const [mobil, motor, sepeda] = trans;

//3. 
//mendeklarasikan variabel bunga
let bunga = ["kamboja", "melati", "mawar"];
//lakukan dekstrukturisasi 
let [bunga1, bunga2, bunga3] = bunga;

console.log(bunga1); //output kamboja
console.log(bunga2); //output melati
console.log(bunga3); //output mawar


//Object
//1. 
// destructuring object tidak perlu pengurutan seperti array. default value dan rest == array
const objSiswa = 
{
    namaDepan: 'Syalom',
    namaBelakang: 'Wagey',
    umur: 20,
    menikah: false
};

const {namaDepan = 'Tokyo', namaBelakang, umur, menikah} = objSiswa // nama variable harus sesuai dengan nama propertinya
console.log(namaDepan, namaBelakang, umur, menikah);
const {namaDepan: Gabriela} = objSiswa; // jika ingin merubah variablenya;
console.log(Gabriela);

// destructuring object dalam sebuah fungsi
// tidak perlu menggunakan dot notation untuk mengakses sebuah variable dalam objek
const hallo = ({namaDepan, namaBelakang}) => `Hallo nama saya ${namaDepan} ${namaBelakang}`;
console.log(hallo(objSiswa));

//2.
//tidak perlu diurutkan seperti array.
// destructuring object tidak perlu pengurutan seperti array. default value dan rest == array
const profil = {
    firstName: `Mia`,
    lastName: `Sundah`,
    umur: 20,
    alamat: `Manado`
};

//3.
let natal = {
    address: "Bitung",
    age: 19,
  };
// buat variabel alamat berisi nilai dari properti alamat pada natal
// buat variabel age berisi nilai dari properti umur pada natal

let { address: alamat, age: usia } = natal;

console.log(alamat); // Output: Bitung
console.log(usia); // Output: 19

