var _ = require('lodash');

console.log("lodash");

var arr = ['a','b','c','d'];

 console.log("chuck: " + _.chunk(arr,2));

 var arr1 = ['1',3, false, , ''];
 console.log("compact: " + _.compact(arr1));

var arr2 = [2];
console.log("concat: "+ _.concat(arr2, [3], [4]));

var arr3 = [1,2,3,4];
var arr4 = [2,3,6,7];
console.log("difference: " +_.difference(arr3, arr4));

console.log("Date: "+ _.now());
