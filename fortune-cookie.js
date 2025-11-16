//Hillary Charlton
//Assignment 8 - Custom Module

//import ansi-colors
const colors = require('ansi-colors')

//import custom module
const getFortune = require('./get-fortunes.js')
const message = getFortune()

//display message
console.log("")
console.log(colors.cyan.bgBlack(message))
console.log("")
