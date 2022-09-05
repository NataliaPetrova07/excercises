// let cssString = "rgb(192, 13, 1)";

// function cssToRGB(string) {
//   let r = parseInt(string.substring(4, string.indexOf(",")));
//   let g = parseInt(string.substring(string.indexOf(" ") + 1, string.lastIndexOf(",")));
//   let b = parseInt(cssString.substring(string.lastIndexOf(" ") + 1, string.indexOf(")")));

//   console.log(r, g, b);
// }

// cssToRGB(cssString);

// let hexvalue = "#f00b42";
// function hexToRGB(string) {
//   let r = parseInt(string.substring(1, 3), 16);
//   let g = parseInt(string.substring(3, 5), 16);
//   let b = parseInt(string.substring(5), 16);

//   console.log(r,g,b);
// };

// hexToRGB(hexvalue);

let hexvalue = [(r = 240), (g = 11), (b = 66)];

function rgbToHex(string) {
  let h = r.toString(16);
  let e = g.toString(16);
  let x = b.toString(16);

  if (h.length < 2) {
    h = "0" + h;
  }
  if (e.length < 2) {
    e = "0" + e;
  }
  if (x.length < 2) {
    x = "0" + x;
  }

  console.log(`#${h}${e}${x}`);

}

rgbToHex(hexvalue);
