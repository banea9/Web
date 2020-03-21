function solution(arr) {
  let numArray = subArrays("number")(arr);
  let strArray = subArrays("string")(arr);
  if(numArray.length > 0 && strArray.length > 0) {
      return [numArray, strArray];
  } else {
      return [...(numArray.length > 0 ? numArray : strArray)]
  }
}

function subArrays(inputType) {
  return arr => {
    return arr
      .filter(x => typeof x === inputType)
      .sort((a, b) => a - b)
      .reduce((acc, e, i, a) => {
        if (i > 0 && e === a[i - 1]) {
          if (Array.isArray(acc[acc.length - 1])) {
            acc[acc.length - 1] = [...acc[acc.length - 1], e];
          } else {
            acc[acc.length - 1] = [acc[acc.length - 1], e];
          }
        } else {
          acc = [...acc, e];
        }
        return acc;
      }, []);
  };
}

solution([1, 2, 4, 591, 392, 391, '2', 5, '10', 2, 1, '1', 1, 20, 20]);
