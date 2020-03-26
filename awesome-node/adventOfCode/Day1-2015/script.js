const fs = require("fs");
////part 1
// fs.readFile("./input.txt", (err, data) => {
//   console.time("fun");
//   const arr = data.toString().split("");
//   const result = arr.reduce((acc, curr) => {
//     if (curr === "(") {
//       return (acc += 1);
//     } else if (curr === ")") {
//       return (acc -= 1);
//     }
//   }, 0);
//   console.timeEnd("fun");
//   console.log(result);

// });

///part 2

fs.readFile("./input.txt", (err, data) => {
  console.time("fun2");
  const arrOfData = data.toString().split("");
  let acc = 0;
  let counter = 0;
  const result = arrOfData.some((curr, i) => {
    if (curr === "(") {
      acc += 1;
    } else if (curr === ")") {
      acc -= 1;
    }
    counter++;
    return acc < 0;
  });
  console.timeEnd("fun2");
  console.log(counter);
});
