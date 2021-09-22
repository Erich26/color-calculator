const prompt = require('prompt-sync')();

const choose = prompt('Enter two colors with a space between to combine or one to deconstruct: ');
const redblue = 'purple';
const redyellow = 'orange';
const blueyellow = 'green';
const purple = 'red, blue';
const orange = 'red, yellow';
const green = 'blue, yellow';

if (choose.includes('red blue') || ('red yellow') || ('blue yellow')) {
     if (choose === 'red blue') {
    console.log(redblue);
     }
    else if (choose === 'red yellow') {
    console.log(redyellow);
     }
    else if (choose === 'blue yellow') {
    console.log(blueyellow);
    }
    else if (choose.includes('purple') || ('orange') || ('green')) {
     if (choose === 'purple') {
     console.log(purple);
     }
    else if (choose === 'orange') {
     console.log(orange);
     }
    else if (choose === 'green') {
     console.log(green);
     }
    else {
        console.log('Error, Self Destruct Imminent.');
    }
}}
    