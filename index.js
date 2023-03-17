const userInfo = require('./information.js');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text: `I'm ${userInfo.name}, my school is ${userInfo.campus}`
}));