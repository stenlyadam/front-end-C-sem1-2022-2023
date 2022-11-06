console.log("GROUP EXERCISE 6 BY TOKYO");
/*
-Kilis, Vannesa
-Lamalo, Pretty
-Wagey, Syalom
-Sundah, Mia
-Kaminang, Anjelita\
-Katutu, Natalia
*/

//no. 1 Promise
let condition =true;
let helloword = new Promise((resolve) => {
    setTimeout(()=> {
        resolve("hello word");
    }, 2000);
});


async function massages(){
    const msg = await helloword;
    console.log(msg);
}

//no. 2 Fetch
function ambildataUser(){
    fetch("https://reqres.in/api/users")
    .then(function(response){
        return response.json();
    })
    .then(function (users){
        console.log(users.data);
        
    });
}
console.log(ambildataUser());

//no. 3 Async/ Await
async function ambildataUser(){
    await fetch("https://reqres.in//api/users")
    .then(function (response){
        return response.json();
    })
        .then(function(users){
            console.log(users.data);
        });
    }
console.log(ambildataUser());

//no. 4 Axios
axios.get("https://reqres.in/api/users.json") 
.then(response => (this.info = response.ambildataUser));