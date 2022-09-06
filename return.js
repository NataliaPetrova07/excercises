function greeting(name) {
    return `Hello ${name}`
}

let firstName = greeting("Natalia");

console.log("message 1: ",firstName);
console.log("message 2: ",greeting("Freddie"));
console.log("message 3: ",`A message ${greeting("Signe")}`);

