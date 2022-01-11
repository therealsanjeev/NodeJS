console.log('Hello JavaScript!');

fetch('http://localhost:3000/weather?address=delhi').then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data)
        }
    })

})

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')

const errorMessage=document.querySelector('#message-1')
const setData=document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    errorMessage.textContent="Fetching yor weather..."
    setData.textContent="Please wait..."
    const location=search.value

    const url='http://localhost:3000/weather?address='+location
    fetch(url).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            errorMessage.textContent=data.error
            setData.textContent=""
        }else{
            console.log(data.weather)
            setData.textContent=data.weather
            errorMessage.textContent=""

        }
    })

})
})
