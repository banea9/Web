

// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

////////////////QUESTION 1 PART 1 ANSWER

function question1(arr) {
    let answerArr = [];
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        let newArr = [];
        newArr.push(arr[i])
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                newArr.push(arr[j])
            }
            else {
                i = j - 1;
                break;
            }
        }
        if (newArr.length === 1) {
            answerArr.push(arr[i]);
        }
        else {
            answerArr.push(newArr)
        }
    }

    console.log(answerArr)
}

question1([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20])

/////////////////////

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]
////////////////////////ANSWER 1 TO QUESTION 2 //////////////////////////////////////
function answer(arr, num) {
    let answerArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
                answerArr.push(arr[i]);
                answerArr.push(arr[j]);
            }
        }
    }
    return answerArr
}

console.log(answer([1, 2, 3], 4));
//////////////////////////////////////////////////////////////////////////////////////////

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

//////////////////////////////////////////////////////////////////////////////////////////






