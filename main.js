const prompt = require('prompt-sync')();

const choose = prompt('Combine or Deconstruct?');
const redblue = 'purple';
const redyellow = 'orange';
const blueyellow = 'green';
const purple = 'red, blue';
const orange = 'red, yellow';
const green = 'blue, yellow';

if (choose === 'combine' && 'Combine') {
    const two = prompt('Enter two colors with a space inbetween: ');
     if (two === 'red blue') {
    console.log(redblue);
     }
    else if (two === 'red yellow') {
    console.log(redyellow);
     }
    else if (two === 'blue yellow') {
    console.log(blueyellow);
    }
    else {
        console.log('error')
    }
} 

else if (choose === 'deconstruct' && 'Deconstruct') {
    const one = prompt('Enter one color: ');
     if (one === 'purple') {
     console.log(purple);
     }
    else if (one === 'orange') {
     console.log(orange);
     }
    else if (one === 'green') {
     console.log(green);
     }
    else {
        console.log('error')
    }

}

else {
    console.log('Error, Self Destruct Imminent.')
}




