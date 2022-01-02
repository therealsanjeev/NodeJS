const fs = require('fs')
const yargs=require('yargs')
const getNotes=require('./note')

//create commond
yargs.command({
    command:'add',
    describe:'Add new note',
    handler:function (){
        console.log('Adding a new note!')
    }
})
yargs.command({
    command:'remove',
    describe:'Remove note from file',
    handler:function (){
        console.log('Removing note from file :(')
    }

})


// console.log(yargs.argv);
