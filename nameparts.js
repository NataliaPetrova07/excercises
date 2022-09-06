// const stringName = "Peter Heronimous Lind";

/*const words = stringName.split(" ");

const firstName = words[0];
const middleName = words[1];
const lastName = words[2];

console.log(firstName, middleName, lastName);*/

/*let firstName = stringName.substring(0, stringName.indexOf(" "));
let middleName = stringName.substring(stringName.indexOf(" "), stringName.lastIndexOf(" "));
let lastName = stringName.substring(stringName.lastIndexOf(" "));

console.log(firstName, middleName, lastName);*/

// const fullname = "Peter Bosch Lind";

// function getNameParts(stringName) {
//   let firstName = stringName.substring(0, stringName.indexOf(" "));
//   let middleName = stringName.substring(stringName.indexOf(" ") + 1, stringName.lastIndexOf(" "));
//   let lastName = stringName.substring(stringName.lastIndexOf(" ") + 1);
//   if (middleName === " ") {
//     middleName = undefined;
//   }
//   console.log({ firstName, middleName, lastName });
// }

// getNameParts(fullname);

// function fullName(lastName, firstName, middleName, gibberish) {
//   firstName += " ";
//   if (middleName === undefined) {
//     middleName = "";
//   } else {
//     middleName += " ";
//   }
//   console.log(`${firstName}${middleName}${lastName}`);
// }

// fullName("Potter", "Harry", "James", "Pottypotpot");


function fullName(lastName, firstName, middleName, gibberish) {
firstName = capitalize(firstName);
middleName = capitalize(middleName);
lastName = capitalize(lastName);
    if (middleName) {
    return `${firstName} ${middleName} ${lastName}`
  } 
  return `${firstName} ${lastName}`
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
  }

const TheName = fullName("potter", "harry", "james", "pottypotpot");

console.log(TheName)