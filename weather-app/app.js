const request=require('request')

const baseUrl='http://api.weatherstack.com/current?access_key=df1294a4a0e5612dc74c7907e14222d8&query=New%20York&units=f'

request({url:baseUrl,json:true},(error,response)=>{
    // const data=JSON.parse(response.body)
    console.log(response.body.current.weather_descriptions[0])

})