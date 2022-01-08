const request=require('request')
const geoCode=require('./geocode')
const getWeather=require('./getweather')
const process = require('process');


// const baseUrl='http://api.weatherstack.com/current?access_key=df1294a4a0e5612dc74c7907e14222d8&query=New%20York&units=f'

// request({url:baseUrl,json:true},(error,response)=>{
//     // const data=JSON.parse(response.body)
//     if(error){
//         console.log('Unable to connect, try again!')
//     }else if(response.body.error){
//         console.log(response.body.error.info)
//     }else
//     console.log(response.body.current.weather_descriptions[0])
// })


// const t='https://api.mapbox.com/geocoding/v5/mapbox.places/ges232es.json?access_token=pk.eyJ1IjoidGhlcmVhbHNhbmplZXYiLCJhIjoiY2t5M2V5MHpiMDE2NTJ2cHYxNHE0YmRpMCJ9.BHox9GnMrliagz1VQ_y_Tw&limit=1'
// request({url:geoCoding,json:true},(error,response)=>{
//     // const data=JSON.parse(response.body)

//     if(error){
//         console.log('Unable to connect, try again!')
//     }else if(response.body.features.length==0){
//         console.log('Invalid request:(')
//     }else{
//         const latitude=response.body.features[0].center[0]
//         const longitude=response.body.features[0].center[1]
//         console.log(latitude,longitude)
//     }
   
// })

// console.log(process.argv)
geoCode(process.argv[2],(error,data)=>{
    // console.log('Error '+error)
    if(error){
        return console.log(error)
    }
    getWeather(data.location,(error,data)=>{
        if(error){
            return console.log(error)
        }
        console.log(data);
    })
    
})