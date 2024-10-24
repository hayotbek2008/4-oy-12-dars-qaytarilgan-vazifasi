// 1-example
// function sumofnumbers(arg) {
//     let sum = 0;
//     for (let i = 0; i < arg.length; i++) {
//         sum += arg[i]
//     }
//     return sum;
// }

// let res = sumofnumbers([1, 2, 3, 4, 5])
// console.log(res);

// 2-example
// function theyoungest(arg) {
//     if (arg.length == 0) {
//         return null;
//     }
//     let minValue = arg[0]
//     for (let i = 1; i < arg.length; i++) {
//         if (arg[i] < minValue) {

//             minValue = arg[i]
//         }
//     }
//     return minValue
// }

// let res = theyoungest([5, 3, 8, 1, 4]);
// console.log(res);

// 3-example
// function stringlength(arg) {
//     let res = [];
//     for (let i = 0; i < arg.length; i++) {
//         if (typeof arg[i] === 'string') {

//             res.push(arg[i].length)
//         }
//     }
//     return res
// }

// console.log(stringlength([1, 'hello', true, 'world', 42, 'Javascript']));

// 4-example
// function indescendingorder(arg) {
//     return arg.sort(function(a,b){
//         return b-a;
//     })
// }

// console.log(indescendingorder([5,3,8,1,4]));

// 5-example
// function concatenateArrays(arr1,arr2) {
//     return arr1.concat(arr2);
// }

// let array1 = ([1,2,3])
// let array2 = ([4,5,6])
// let res = concatenateArrays(array1,array2)
// console.log(res);

// 6-example
// function reverseTheArray(arg) {
//     let arr = [];
//     for (let i = arg.length - 1; i >= 0; i--) {
//         arr.push(arg[i])
//     }
//     return arr;
// }

// console.log(reverseTheArray([1, 2, 3, 4, 5]));

// 7-example
// function getpositiveNumbers(arg) {
//     let positiveNumbers = [];
//     for(let i =0; i<arg.length; i++){
//         if(arg[i]>0){
//             positiveNumbers.push(arg[i])
//         }
//     }
//     return positiveNumbers;
// }

// 8-misol
// function addValueToArray(arr, value) {
//   let newArray = []
//   for (let i = 0; i < arr.length; i++) {
//     newArray[i] = arr[i] + value
//   }
//   return newArray
// }
// const num = [1, 2, 3, 4, 5];
// const valuedToAdd = 5;
// const newArray = addValueToArray(num, valuedToAdd)
// console.log(newArray);


// console.log(getpositiveNumbers([-10,20,49,-99]));

// 9-example
// function separatePositiveAndNegativeNumbers(arg) {
//     let positiveNumbers = [];
//     let negativeNumbers = [];
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] > 0) {
//             positiveNumbers.push(arg[i])
//         } else if (arg[i] < 0) {
//             negativeNumbers.push(arg[i])
//         }
//     }

//     return {
//         positive: positiveNumbers,
//         negative: negativeNumbers
//     }
// }
// console.log(separatePositiveAndNegativeNumbers([1, -2, 3, -4, 5, -6, 0]));
// 10-misol


// 12-example

// function separateEvenAndOddNumbers(arg) {
//     let evenNumbers = [];
//     let oddNumbers = [];

//     for (let i = 0; i < arg.length; i++) {
//         if (typeof arg[i] === 'number') {
//             if (arg[i] % 2 == 0) {
//                 evenNumbers.push(arg[i])
//             } else {
//                 oddNumbers.push(arg[i])
//             }
//         }

//     }
//     return {
//         even: evenNumbers,
//         odd: oddNumbers
//     };
// }
// console.log(separateEvenAndOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 13-example
// function removeValuesFromArray(arr, valueToRemove) {
//     const newArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== valueToRemove) {
//             newArray.push(arr[i]);
//         }
//     }

//     return newArray;
// }

// const originalArray = [1, 2, 3, 4, 2, 5, 2];
// const valueToRemove = 2;
// const res = removeValuesFromArray(originalArray, valueToRemove);
// console.log(res);

// 14-example
// function squareElement(arr) {
//     let element = [];
//     for (let i = 0; i < arr.length; i++) {
//         element.push(arr[i] * arr[i])
//     }
//     return element
// }

// console.log(squareElement([1, 2, 3, 4, 5]));

// 15-example
// function doubleElements(arg) {
//     let doubled  =[];
//     for(let i = 0; i<arg.length; i++){
//         doubled.push(arg[i]*2)
//     }
//     return doubled;
// }

// console.log(doubleElements([1,2,3,4,5]));


// 16-example
// function removeNullAndUndefined(arg) {
//     return arg.filter(element=> element!==null && element!==undefined)
// }

// console.log(removeNullAndUndefined([1, null, 2, undefined, 3, null, 4, undefined, 5]));


// 17 - example
// function capitalizeStrings(arr) {
//   let capitalized = [];

//   for (let i = 0; i < arr.length; i++) {
//     let str = arr[i];
//     capitalized.push(str.charAt(0).toUpperCase() + str.slice(1));
//   }

//   return capitalized;
// }
// let originalArray = ["hello", "world", "javascript", "is", "fun"];
// let capitalizedArray = capitalizeStrings(originalArray);
// console.log(capitalizedArray);


// 18-example
// function countOccurrences(arr, value) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == value) {
//       count++;
//     }
//   }
//   return count
// }

// let originalArray = [1, 2, 3, 4, 2, 5, 2, 6];
// let valueToCount = 2;
// let occurrences = countOccurrences(originalArray, valueToCount);
// console.log(occurrences);

// 19-misol
// function insertElementsIntoArray(arr, elements) {
//   let midIndex = Math.floor(arr.length / 2);
//   let newArray = [];

//   for (let i = 0; i < midIndex; i++) {
//     newArray.push(arr[i]);
//   }

//   for (let i = 0; i < elements.length; i++) {
//     newArray.push(elements[i]);
//   }

//   for (let i = midIndex; i < arr.length; i++) {
//     newArray.push(arr[i]);
//   }

//   return newArray;
// }

// let originalArray = [1, 2, 3, 4, 5];
// let newElements = [10, 20, 30];
// let res = insertElementsIntoArray(originalArray, newElements);
// console.log(res);


// 20-misol
// function sortStringsByLength(arr) {
//   return arr.sort(function (a, b) {
//     return a.length - b.length;
//   })
// }

// let res = sortStringsByLength(['apple', 'banana', 'fig', 'cherry', 'date'])
// console.log(res);


// 21-misol
// function findLongestString(arr) {
//   let longestString = ''
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'string' && arr[i].length > longestString.length) {
//       longestString = arr[i]
//     }
//   }
//   return longestString
// }
// let res = findLongestString(['apple', 'banana', 'cherry', 'date', 'kiwi'])
// console.log(res);


// 22-misol
// function joinArrayElements(arr) {
//   return arr.join(', ')
// }
// let res = joinArrayElements(['apple', 'banan', 'cherry'])
// console.log(res);


// 23-misol
// function filterNumbers(arr) {
//   const newArray = []
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//       newArray.push(arr[i])
//     }
//   }
//   return newArray;
// }

// let res = filterNumbers([1, 2, 'hello', 'NaN'])
// console.log(res);

// 24-misol
// function getLastElements(arr, n) {
//   return arr.slice(-n)
// }

// let originalArray = [1, 2, 3, 4, 5, 6, 7, 8]
// let lastElements = getLastElements(originalArray, 3)
// console.log(lastElements);






