const fs=require('fs')

const getNotes=function(){
    return "Your notes..."
}

const addNotes=function(title,body){
    const notes=loadNotes()
    const duplicateCheck=notes.filter(function(note){
        return note.title===title
    })
    if(duplicateCheck.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('New Note Added!')
    }else{
       console.log('Dupalicate note please try something else :(')
    }
 
    // console.log(notes)

}
const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes=function(){


    try{
        
        const notes=fs.readFileSync('notes.json')
        const buffer=notes.toString()
        return JSON.parse(buffer)

    }catch(e){
        return []
    }
}
module.exports={
    getNotes:getNotes,
    addNotes:addNotes
}