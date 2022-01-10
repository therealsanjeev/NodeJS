const express=require('express')
const path=require('path')
const app=express()
const hbs=require('hbs')

//Define Path for express configs
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

 
app.get('',(req,res)=>{
    res.render('index',{
        title:"Home",
        name:'Sanjeev'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        name:'Sanjeev',
        title:'Help',
        text:'How can we help you!'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About Us",
        name:'Sanjeev'
    })
})

app.get('/weather',(req,res)=>{
    res.send('weather')
})


app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Sanjeev',
        errormessage:'Help page is not found:('
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Sanjeev',
        errormessage:'page not found:('
    })
})
app.listen(3000,()=>{
    console.log('Server is up on port 3000');
})