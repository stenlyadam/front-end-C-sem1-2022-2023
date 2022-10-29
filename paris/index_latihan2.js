let peoples =["Greg", "Mary", "Devon", "James"];

// for (let i = 0; 1 < people.length; i++){
//      console.log(people[i]);
//}

// peoples.forEach(function (people) {
//     console.log(people)
//   });

peoples.shift();
// console.log(peoples);

peoples.pop();
// console.log(peoples);

peoples.unshift("Marton");
// console.log(peoples);

peoples.push("Kyle");
// console.log(peoples);

// for(let i = 0; i < peoples.length; i++){
//         console.log(peoples[i]);
//         if (peoples)[i] === "Mary"){
//             break
//         }
//     }

// let newPeople = peoples.slice(1);
// console.log(newPeople);

peoples.splice(2,1,"Elizabeth", "Artie");
// console.log(peoples);

let withBob = peoples.concat("Bob");
console.log(withBob);

let programing = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programing.languages.push("Go");
// console.log(programing);

programing["dificulty"] =7;
//console.log(programing);

delete programing.jokes;

programing.isFun = true;
// console.log(programing);



programing.languages.map(function(item,index) {
    console.log(`${index}-${item}`);
});