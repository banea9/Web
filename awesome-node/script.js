const fs = require("fs"); //this module allows to access out file system

fs.readFile("./Hello.txt", (err, data) => {
  if (err) {
    console.log("Errorrr");
  } else {
    console.log(data.toString());
  }
});

const file = fs.readFileSync("./Hello.txt");
console.log(file.toString());

// fs.appendFile("./Hello.txt", " This is so cool !!!!", err => {
//   if (err) {
//     console.log("Error");
//   }
// });

// fs.writeFile('bye.txt', 'Sad to see you go!', err => {
//     if(err) {
//         console.log(err)
//     }
// })

fs.unlink("./bye.txt", err => {
  if (err) {
    console.log(err);
  }
});
