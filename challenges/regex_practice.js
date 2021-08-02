// function isUrl(string) {
//   return !!string.match(/^https?:\/\/\S+$/);
// }
//
// console.log(isUrl('http://launchschool.com'));   // -> true
// console.log(isUrl('https://example.com'));       // -> true
// console.log(isUrl('https://example.com hello')); // -> false
// console.log(isUrl('   https://example.com'));    // -> false

// function fields(string) {
//   return string.split(/[ \t,]+/);
// }
//
// a = fields("Pete,201,Student");
// // -> ['Pete', '201', 'Student']
//
// b = fields("Pete \t 201    ,  TA");
// // -> ['Pete', '201', 'TA']
//
// c = fields("Pete \t 201");
// // -> ['Pete', '201']
//
// d = fields("Pete \n 201");
// // -> ['Pete', '\n', '201']
//
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// function mysteryMath(string) {
//   return string.replace(/[+\-*/]/, '?');
// }
//
// a = mysteryMath('4 + 3 - 5 = 2');
// // -> '4 ? 3 - 5 = 2'
//
// b = mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// // -> '(4 ? 3 + 2) / 7 - 1 = 1'
//
// console.log(a);
// console.log(b);

// function mysteriousMath(string) {
//   return string.replace(/[+\-*/]/g, '?');
// }
//
// a = mysteriousMath('4 + 3 - 5 = 2');           // -> '4 ? 3 ? 5 = 2'
// b = mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'
//
// console.log(a);
// console.log(b);

function formatDate(string) {
  return string.replace(/(\d{4})([\-/])(\d{2})\2(\d{2})/, '$4.$3.$1')
}

// a = formatDate('2016-06-17'); // -> '17.06.2016'
// b = formatDate('2016/06/17'); // -> '2016/06/17' (no change)

// console.log(a);
// console.log(b);

c = formatDate('2016-06-17'); // -> '17.06.2016'
d = formatDate('2017/05/03'); // -> '03.05.2017'
e = formatDate('2015/01-31'); // -> '2015/01-31' (no change)

console.log(c);
console.log(d);
console.log(e);
