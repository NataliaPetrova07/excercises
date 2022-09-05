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

let cssString = "rgb(192, 13, 1)";

function cssToRGB(string) {
  let r = parseInt(string.substring(4, string.indexOf(",")));
  let g = parseInt(string.substring(string.indexOf(" ") + 1, string.lastIndexOf(",")));
  let b = parseInt(cssString.substring(string.lastIndexOf(" ") + 1, string.indexOf(")")));

  console.log(r, g, b);
}

cssToRGB(cssString);
