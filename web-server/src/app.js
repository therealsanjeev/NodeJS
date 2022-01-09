const express=require('express')
const path=require('path')
const app=express()

const publicDirectoryPath=path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))
 
// app.get('',(req,res)=>{
//     res.send('<h1>Hello express!</h1>')
// })

// app.get('/help',(req,res)=>{
//     res.send([{name:'Sanjeev',age:22},{name:'Prateek',age:23}])
// })

// app.get('/about',(req,res)=>{
//     res.send('About Us!')
// })

// app.get('/weather',(req,res)=>{
//     res.send('weather')
// })

app.listen(3000,()=>{
    console.log('Server is up on port 3000');
})