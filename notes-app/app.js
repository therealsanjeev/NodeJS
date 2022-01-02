const fs = require('fs')
const validator = require('validator')

console.log(validator.isEmail("sanjeev@ds222.com"))
fs.appendFileSync('test.txt', "test Node!")