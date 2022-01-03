const fs = require('fs')
const yargs=require('yargs')
const notes=require('./notes.js')

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
        const add=notes.addNotes(argv.title,argv.description)
        
        // console.log('Title : '+argv.title)
        // console.log('Description : '+argv.description)
    }
})
yargs.command({
    command:'remove',
    describe:'Remove note from file',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function (argv){
        notes.removeNotes(argv.title)
    }

})


yargs.parse()
// console.log(yargs.argv);
