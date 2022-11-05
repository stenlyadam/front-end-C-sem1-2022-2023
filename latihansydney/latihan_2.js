//--------------------------------------Array----------------------------------------------------------------
let people = ["Greg", "Mary", "Devon", "James"];

//No. 1
for(let i =0; i< people.length; i++){
}

//No. 2
people.forEach(consoleLog); 
    function consoleLog(item, index, arr){
        console.log(item);
    }

//No. 3
people.shift();
     
//No. 4
people.pop();

//No. 5
people.unshift("Matt");

//No. 6
people.push("Sydney");

//No. 7
for(let i =0; i< people.length; i++){
    if(i == 2){
        break;
    }
    console.log(people);
    }

//No. 8
let people1 = people.slice(2);
console.log(people1);

// 9
people = ["Matt", "Mary", "Elizabeth", "Artie", "Sydney"];
people.splice(2,1,"Elizabeth", "Artie");
console.log(people);

// 10
let withBob = ["Bob"];
let hasilAkhir = people.concat(withBob);
console.log(hasilAkhir);

//--------------------------------------Object-----------------------------------------------------
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1
programming.languages.push("Go");

// 2
programming.difficulty = 7;

// 3
delete programming.jokes;

// 4
programming.isFun = true;

// 5
for (let i = 0; i < programming.languages.length; i++) {
    console.log(programming.languages[i]);
}

// or 
for (let language of programming.languages) {
    console.log(language);
}

// 6
for (let key in programming){
    console.log(key);
}

// 7
for (let key in programming){
    console.log(programming[key]);
}