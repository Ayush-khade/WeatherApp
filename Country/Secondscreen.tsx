import React,{useState} from "react"
import { Text,View,Button ,Image} from "react-native";
const Secondscreen=({navigation,route}:any)=>{

    const final=()=>{
        fetch("http://api.weatherstack.com/current?access_key=38354a657d7a3a01cfcdee8c9cac5db8&query="+route?.params?.data?.cap)
        .then(response => response.json())
            .then((json:any) => {
                // console.log(json.location.lat)
                // console.log(json.location.lon)
                // console.log(json.location.localtime)
                // console.log(json.current.weather_icons[0])
                // console.log(json.current.weather_descriptions[0])
                // console.log(json.current.temperature)
                // console.log(json.current.wind_speed)
                // console.log(json.current.pressure)
                // console.log(json.current.humidity)

                let capitalWeatherData:any={
                    cap:route?.params?.data?.cap,
                    lat:json.location.lat,
                    lon:json.location.lon,
                    localtime:json.location.localtime,
                    icon:json.current.weather_icons[0],
                    desc:json.current.weather_descriptions[0],
                    temp:json.current.temperature,
                    windSpeed:json.current.wind_speed,
                    pressure:json.current.pressure,
                    humidity:json.current.humidity
                }
                navigation.navigate("Third",{data:capitalWeatherData})
            })
            .catch(error => {
                console.error(error);
            });

    }
    return(
        <View style={{flex:1,backgroundColor:"white"}}>
            <View style={{flex:1,backgroundColor:"white",padding:10,margin:5,justifyContent:"center"}}>
                <Image
                source={{
                    uri:route?.params?.data?.flag
                }}
                style={{width:300,height:205,borderWidth:2,alignSelf:"center"}}/>
            </View>
            <View style={{flex:1,backgroundColor:"white",flexDirection:"row",marginTop:15}}>
                <View style={{flex:1,backgroundColor:"darkred",margin:2,padding:10,justifyContent:"center"}}>
                    <Text style={{fontSize:25,color:"white",fontWeight:"bold",alignSelf:"center"}}>Capital</Text>
                    <Text style={{fontSize:15,color:"white",fontWeight:"bold",alignSelf:"center"}}>{route?.params?.data?.cap}</Text>
                </View>
                <View style={{flex:1,backgroundColor:"grey",margin:2,marginLeft:9,padding:10,justifyContent:"center"}}>
                <Text style={{fontSize:25,color:"white",fontWeight:"bold",alignSelf:"center"}}>TimeZones</Text>
                <Text style={{fontSize:15,color:"white",fontWeight:"bold",alignSelf:"center"}}>{route?.params?.data?.tz}</Text>
                </View>
            </View>
            <View style={{flex:1,backgroundColor:"white",flexDirection:"row",marginTop:15}}>
            <View style={{flex:1,backgroundColor:"grey",padding:10,margin:2,marginLeft:5,justifyContent:"center"}}>
            <Text style={{fontSize:25,color:"white",fontWeight:"bold",alignSelf:"center"}}>continents</Text>
            <Text style={{fontSize:15,color:"white",fontWeight:"bold",alignSelf:"center"}}>{route?.params?.data?.cnt}</Text>
            </View>
            <View style={{flex:1,backgroundColor:"darkred",padding:10,margin:2,marginLeft:5,justifyContent:"center"}}>
                <Text style={{fontSize:20,color:"white",alignSelf:"center",fontWeight:"bold"}}>This Project is developed by Vaishnavi Bochare</Text>
            </View>
            </View>
            <View style={{flex:0.8,justifyContent:"center",width:"50%",alignSelf:"center"}}>
                <Button  title="Submit" onPress={()=>{final()}}/>
            </View>
        </View>
    )
}
export default  Secondscreen;