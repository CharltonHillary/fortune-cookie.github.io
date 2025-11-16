//Hillary Charlton
//Assignment 8

const colors = require('ansi-colors')

//import module
const getFortune = require('./get-fortunes.js')
const message = getFortune()

//display message
console.log("")
console.log(colors.magenta.bgBlack(message))
console.log("")
