import React from "react";
import { Text,View,Button, Image } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const Front=({navigation}:any)=>{
   
    return(
        <View style={{flex:1,backgroundColor:"yellow"}}>
           <View style={{flex:5,justifyContent:"center",alignItems:"center"}}>
           <FontAwesome name="snapchat" size={60} color="black"/>
           </View>
            
            <View style={{flexDirection:"row",margin:15,flex:0.7,alignItems:"center",justifyContent:"center"}}>
                <View style={{width:80,borderRadius:45,marginLeft:10,backgroundColor:"white"}}>
                <Button title="Log In" color={"black"} onPress={()=>navigation.navigate("Login")}/>
                </View>
                <View style={{width:80,borderRadius:30,marginLeft:10}}>
                <Button title="Sign up" />
                </View>
           
         
            </View>
            
          
        </View>

    )
}
export default Front