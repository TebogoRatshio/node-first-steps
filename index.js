import chalk from 'chalk';
import {greet} from './greet.js';
import {yo} from './yo.js';
import cowsay from 'cowsay';
import figlet from 'figlet';


// console.log(greet('Ntombi'));
// console.log(yo('Ntombi'));


// const styledMessage = chalk.bgRed.yellow(greet('Ntombi'));


figlet('Hello, Ntombi!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);

});

const styledMessage = chalk.bgRed.black(greet('Ntombi'));
console.log(chalk.bgRed.black(greet('Ntombi')));


console.log(chalk.bgBlue.white(cowsay.say({
    text: greet('Ntombi')
})));



// import chalk from 'chalk';
// //import the greet module that is in the current folder
// import greet from './greet.js'

// const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(styledMessage)

// console.log(chalk.bgRed.whiteBright(greet('Ntombi')));