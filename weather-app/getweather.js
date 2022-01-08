const request=require('request')

const getWeather=(address,callback)=>{
 const baseUrl='http://api.weatherstack.com/current?access_key=df1294a4a0e5612dc74c7907e14222d8&query='+decodeURIComponent(address)+'&units=f'

request({url:baseUrl,json:true},(error,response)=>{
    // const data=JSON.parse(response.body)
    if(error){
        callback('Unable to connect, try again!',undefined)
    }else if(response.body.error){
        callback(response.body.error.info,undefined)
    }else
    callback(error,response.body.current.weather_descriptions[0])
})
}

module.exports=getWeather