
//function
const getFortune = randomFortune => {
    //import json
    const fortunes = require('./fortunes.json') 
    //get random message from array
    const random = Math.floor(Math.random() * fortunes.length) 
    randomFortune = fortunes[random]

    return randomFortune
}    

//export function
module.exports = getFortune