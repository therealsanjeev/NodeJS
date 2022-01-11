const request=require('request')

const getWeather=(address,callback)=>{

 const baseUrl='http://api.weatherstack.com/current?access_key=df1294a4a0e5612dc74c7907e14222d8&query='+decodeURIComponent(address)+'&units=f'

request({url:baseUrl,json:true},(error,response)=>{
    // const data=JSON.parse(response.body)
    if(error){
        return callback('Unable to connect, try again!',undefined)
    }else if(response.body.error){
        return callback(response.body.error.info,undefined)
    }else{
        console.log(response.body)
        return callback(undefined,{
            weather:response.body.current.weather_descriptions[0],
            temp:response.body.current.temperature,
            time:response.body.current.observation_time,
            location:response.body.location.name

        })
    }
})
}

module.exports=getWeather