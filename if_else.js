(function () {
    'use strict';

// if and ifelse and else statements details 

   if (1 + 1 === 2) {
    console.log('The condition is true');
   }

   if (true === false) {
    console.log('this will not be logged');
   } else {
     console.log('this will be logged')
   }

   let color = 'red';
   if (color === 'blue'){
    console.log('blue')
   }else if (color === 'green') {
    console.log('green')
   }else {
    console.log(color);

   }

   if (1) {
    console.log('truthy');
   }

   let arr = ['yes']
   if (arr.length) {
    console.log('array has length');
   }
})();
