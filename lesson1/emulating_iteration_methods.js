//emulating the filter method
// function filter(array, callback) {
//   let result = [];
//   for (let index = 0; index < array.length; index++) {
//     if (callback(array[index])) result.push(array[index]);
//   }
//   return result;
// }
//
// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]
//
// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]


//emulating the map method
// function map(array, callback) {
//   let result = [];
//   for (let index = 0; index < array.length; index++) {
//     result.push(callback(array[index]));
//   }
//   return result;
// }
//
//
// let numbers2 = [1, 2, 3, 4, 5];
// console.log(map(numbers2, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers2, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers2, () => false));
// // => [ false, false, false, false, false ]
//
// let values2 = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values2, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

//emulating the reduce method
// function reduce(array, callback, initial) {
//   let accumulator = initial || array[0];
//   for (let index = 0; index < array.length; index++) {
//     if (index === 0 && accumulator === array[0]) continue;
//     accumulator = callback(accumulator, array[index]);
//   }
//   return accumulator;
// }
//
// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined
//
// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// // => ["Curly", "Larry", "Mo"]

//emulating filter with the reduce method
// function filter(array, callback) {
//   return array.reduce((acc, current) => {
//     if (callback(current)) {
//       acc.push(current);
//     }
//     return acc;
//   }, []);
// }
//
//
// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]
//
// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

//emulating map with the reduce method
function map(array, callback) {
  return array.reduce((accumulator, current) => {
    accumulator.push(callback(current));
    return accumulator;
  }, []);
}

let numbers2 = [1, 2, 3, 4, 5];
console.log(map(numbers2, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers2, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers2, () => false));
// => [ false, false, false, false, false ]

let values2 = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values2, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]
