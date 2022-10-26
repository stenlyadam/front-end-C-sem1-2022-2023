// // 1.A
// function helloWorld()
// {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello World");
//         },2000)
//     })
// }

// // 1.B
// const messages = async() => {
//     const msg = await helloWorld();
//     console.log(msg);
// };

// // 1.C
// messages();

// //2. A
// function ambilDataUser()
// {
// //2. B
//     fetch("https://reqres.in/api/users")
// //2. C
//     .then(function (response) {
//     return response.json();
//   })
// //2. D
//     .then(function (users) {
//     console.log(users);
//   });
// };
// //2. E
// console.log(ambilDataUser());

//3. 

const ambilDataUser = async () => {
  try {
    let result = await newPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
ambilDataUser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    json.forEach(({ name, email }) => console.log(`${name}, ${email}`));
  })
  .catch((error) => console.log("Error get data" + error));
