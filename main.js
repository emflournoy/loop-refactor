'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    return arr.reduce(
      function(el, base){
      return el+base;
    }, base)
  },

  someObjsContainProp: (arr, prop) => {
    return arr.some(function(el){
      return el.hasOwnProperty(prop);
    })
},

  convertNameArrayToObject: (arr) => {
    let nameObj = arr.map(function(el){
      let obj = {};
      obj.first = el[0];
      obj.last = el[1];
      return obj;
    })
    return nameObj;
  },

  objContainsProp: (arr, prop) => {
  return arr.every(function(el){
      return el.hasOwnProperty(prop);
  })
  },

  stringMatch: (arr, str) => {
    let matches = arr.filter(function(el){
      return el.includes(str)
    })
    return matches;
  },
};
