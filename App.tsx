import React from 'react';
import{Text,View,Button, Image}from 'react-native';

const App=()=>{
  return(<>
  <View style={{flex:1,backgroundColor:"cornsilk",justifyContent:"center"}}>
   <Text style={{color:"lightseagreen",fontSize:30,fontWeight:"bold",alignSelf:"center"}}> Siddhesh Deshpande</Text>
   <Text style={{color:"purple",fontSize:30,fontWeight:"bold",alignSelf:"center"}}> Age:23</Text>
   <Text style={{color:"deeppink",fontSize:30,fontWeight:"bold",alignSelf:"center"}}> City:Akola</Text>
   <Text style={{color:"red",fontSize:30,fontWeight:"bold",alignSelf:"center"}}> State:Maharashtra</Text>
<Image
source={{
  uri:'https://assets.gqindia.com/photos/6253f7fe5f4f4f56d4a3d7c4/1:1/w_1080,h_1080,c_limit/Ranbir%20Kapoor%20Alia%20Bhatt.jpg'
}} style={{ height:300,width:300,alignSelf:"center"}}/>
  </View>
  
  </>)
}

export default App;