const stringName = "Peter Heronimous Lind";

/*const words = stringName.split(" ");

const firstName = words[0];
const middleName = words[1];
const lastName = words[2];

console.log(firstName, middleName, lastName);*/

let firstName = stringName.substring(0, stringName.indexOf(" "));
let middleName = stringName.substring(stringName.indexOf(" "), stringName.lastIndexOf(" "));
let lastName = stringName.substring(stringName.lastIndexOf(" "));

console.log(firstName, middleName, lastName);
