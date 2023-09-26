import React,{useState}from "react";
import{Text,View,Image}from "react-native";

const Third=({navigation,route}:any)=>{
    return(
        <>
        <View style={{flex:1,backgroundColor:"black"}}>
            <Text style={{fontSize:35,fontWeight:"bold",color:"white",alignSelf:"center"}}>{route?.params?.data?.cap}</Text>
            <View style={{flex:1,flexDirection:"column",margin:"auto",marginTop:15}}>
                <View style={{flex:1,backgroundColor:"grey",justifyContent:"center"}}>
                    <Text style={{fontSize:20,fontWeight:"900",color:"white"}}>Latitude : {route?.params?.data?.lat}</Text>
                </View>
                <View style={{flex:1,backgroundColor:"black",justifyContent:"center"}}>
                <Text style={{fontSize:20,fontWeight:"900",color:"white"}}>Longitude : {route?.params?.data?.lon}</Text>
                </View>
                <View style={{flex:1,backgroundColor:"grey",justifyContent:"center"}}>
                <Text style={{fontSize:20,fontWeight:"900",color:"white"}}>LocalTime : {route?.params?.data?.localtime}</Text>
                </View>
                <View style={{flex:1,backgroundColor:"black",justifyContent:"center"}}>
                <Text style={{fontSize:20,fontWeight:"900",color:"white"}}>Temperature : {route?.params?.data?.temp}</Text>
                </View>
                <View style={{flex:1,backgroundColor:"grey",flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:20,fontWeight:"900",color:"white"}}>Weather Icon : </Text>
                <Image
                    source={{
                        uri:route?.params?.data?.icon
                    }}
                    style={{width:80,height:80}}
                    />

                </View>
                <View style={{flex:1,backgroundColor:"black",justifyContent:"center"}}>
                <Text style={{fontSize:20,fontWeight:"900",color:"white"}}>Weather Description : {route?.params?.data?.desc}</Text>
                </View>
                <View style={{flex:1,backgroundColor:"grey",justifyContent:"center"}}>
                <Text style={{fontSize:20,fontWeight:"900",color:"white"}}>Wind Speed : {route?.params?.data?.windSpeed}</Text>
                                    
                </View>
                <View style={{flex:1,backgroundColor:"black",justifyContent:"center"}}>
                <Text style={{fontSize:20,fontWeight:"900",color:"white"}}>Pressure : {route?.params?.data?.pressure}</Text>
                </View>
                <View style={{flex:1,backgroundColor:"grey",justifyContent:"center"}}>
                <Text style={{fontSize:20,fontWeight:"900",color:"white"}}>Humidity : {route?.params?.data?.humidity}</Text>
                </View>
            </View>

        </View>
        </>
    )
}
export default Third;