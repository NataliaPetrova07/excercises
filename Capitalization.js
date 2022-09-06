// const capitalize = function (str) {
//   console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());
// };

// capitalize("nATAlia");

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

const name = "pETer";
const cap = capitalize( name );
console.log( cap );