import React from 'react';
import {View} from 'react-native';


const CapitalDetails=({navigation,route}:any)=>{
const [visibility,humidity,degree,icons,tempreture,time,weather,country,name,query] = route.params.data;

    return(
        <View style={{flex:1,borderWidth:1,borderColor:"#000000"}}>
            <View style={{flex:1,borderWidth:1,borderColor:"#000000",backgroundColor:"#de3b35",flexDirection:"row"}}>

            </View>
            <View style={{flex:1,borderWidth:1,borderColor:"#000000",backgroundColor:"#de7e35"}}></View>
            <View style={{flex:1,borderWidth:1,borderColor:"#000000",backgroundColor:"#ded635"}}></View>
            <View style={{flex:1,borderWidth:1,borderColor:"#000000",backgroundColor:"#96e319"}}></View>
            <View style={{flex:1,borderWidth:1,borderColor:"#000000",backgroundColor:"#2ad1c6"}}></View>
            <View style={{flex:1,borderWidth:1,borderColor:"#000000",backgroundColor:"#36a8f5"}}></View>
            <View style={{flex:1,borderWidth:1,borderColor:"#000000",backgroundColor:"#7949e3"}}></View>
            <View style={{flex:1,borderWidth:1,borderColor:"#000000",backgroundColor:"#b54ccf"}}></View>
            <View style={{flex:1,borderWidth:1,borderColor:"#000000",backgroundColor:"#c24295"}}></View>
        </View>
    )
}
export default CapitalDetails;