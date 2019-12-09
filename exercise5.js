// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

// let newArr = []
// array.forEach(element => {
//     element.username = element.username + '!';
//     newArr.push(element.username)
// });
// console.log(newArr)

//Create an array using map that has all the usernames with a "? to each of the usernames
// let mapArray = array.map(user => {
//   let { username } = user;
//   return username + "?";
// })
// console.log(mapArray);


//Filter the array to only include users who are on team: red
// let filteredArray = array.filter(el => el.team ==='red');
// console.log(filteredArray)

//Find out the total score of all users using reduce
// let result = array.reduce((acc, curr) => acc + curr.score, 0);
// console.log(result)
// (1), what is the value of i? -> index
// (2), Make this map function pure: - SOLUTION: REMOVE LINES 58 AND 59
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
// 	console.log(num, i);
// 	alert(num);
// 	return num * 2;
// })


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.


let newArray = [];
array.forEach(element => {
  let { items } = element;
  items.forEach(el => {
    items.shift()
    el = el + '!';
    items.push(el)
  });
  newArray.push(element);
});
console.log(newArray)














// Currying -> process of converting a function that takes multiple arguments into function that takes one argument at a time

// Compose -> the process of putting two functions together to form a third function, where the output of one function is the 
// input of the other

//Avoid side effects in functions, and pure functions 