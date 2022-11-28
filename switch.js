// An alternative to if - a series of branches executed based on the result of condition
// Can perform faster than an equivalent if statement
// some find it more readable
// if is used with Boolean conditions but switch can be used with types


(function () {
    'use strict';
    let switcher = 'two';

    switch (switcher) {
        case 'one':
            console.log('the value was one');
            break;
        case 'two':
            console.log('the value was two')//it is important to insert break in end
            break;
        case 'three':
            console.log('the value was three');
            break;
        default: // default can use if nothing else matched in end like if switcher was five then we could see
            console.log('nothing else matched');
    }
}());
