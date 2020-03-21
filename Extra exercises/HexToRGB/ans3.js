// // Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", convert);
function convert() {
  let color = document.getElementById("clr").value;
  const hexRegex = /^#[0-9a-f]{6}$/gim;
  const rgbRegex = /(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^\)]*\)/gim;

  if (hexRegex.test(color)) {
    color = color.replace("#", "");
    const obj = {
      r: parseInt(color.substring(0, 2), 16),
      g: parseInt(color.substring(2, 4), 16),
      b: parseInt(color.substring(4, 6), 16)
    };

    document.getElementById("result").textContent += `${Object.keys(obj).join(
      ""
    )}(${Object.values(obj).join(",")})`;
  } else if (rgbRegex.test(color)) {
    const params = color
      .substring(4, color.length - 1)
      .split(",")
      .map(Number);
    const [r, g, b] = [...params];
    document.getElementById("result").textContent += rgbToHex(r, g, b);
  }
}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
