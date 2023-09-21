import React from "react";
import { Button, Text,View } from "react-native";
const App=()=>{
  return(
    <View style={{flex:1,backgroundColor:"pink",justifyContent:"center"}}>
      <Text style={{fontSize:25,color:"black",fontWeight:"bold",alignSelf:"center"}}>React-Native</Text>
      <View style={{marginTop:15,width:"auto",height:"auto"}}>
      <Button title="Next screen" color={"black"}/>
      </View>

    </View>

  )
} 
export default App;