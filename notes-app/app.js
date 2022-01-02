const fs = require('fs')
const yargs=require('yargs')
const getNotes=require('./note')

//create commond
yargs.command({
    command:'add',
    describe:'Add new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        description:{
            describe:'Note description',
            demandOption:true,
            type:'string'
        }
    },
    handler:function (argv){
        console.log('Title : '+argv.title)
        console.log('Description : '+argv.description)
    }
})
yargs.command({
    command:'remove',
    describe:'Remove note from file',
    handler:function (){
        console.log('Removing note from file :(')
    }

})


yargs.parse()
// console.log(yargs.argv);
