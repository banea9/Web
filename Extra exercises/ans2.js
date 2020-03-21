// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

function answer(arr, target) {
  return arr.filter((el, i) =>
    arr.find((el2, i2) => el2 === target - el && i !== i2)
  );
}

console.log(answer([1, 2, 3], 4));
