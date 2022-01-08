const request=require('request')

const geoCode=(address,callback)=>{
    const geoCoding='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoidGhlcmVhbHNhbmplZXYiLCJhIjoiY2t5M2V5MHpiMDE2NTJ2cHYxNHE0YmRpMCJ9.BHox9GnMrliagz1VQ_y_Tw&limit=1'

    request({url:geoCoding,json:true},(error,response)=>{
        // const data=JSON.parse(response.body)
    
        if(error){
            callback("Unable to complete your request :(",undefined)
        }else if(response.body.features.length==0){
            callback("'Invalid request:(",undefined)

        }else{
            
            callback("",{
                'latitude':response.body.features[0].center[0],
                'longitude':response.body.features[0].center[1],
                'location':response.body.features[0].place_name
            })
        }
       
    })

}
module.exports=geoCode
