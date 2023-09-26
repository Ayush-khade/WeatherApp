import React, { useState } from "react";
import{Text,View,TextInput,Button}from "react-native"
const Login=({navigation}:any)=>{
    const[userName,setUserName]=useState("")
    const[password,setPassword]=useState("")
    
    
    
    return(
        <>
        <View style={{flex:1,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>

              <Text style={{fontSize:36,color:"black",fontWeight:"bold"}}> Log In</Text>
            <View style={{alignSelf:"flex-start",margin:10}}>
                <Text style={{fontSize:15,fontWeight:"bold",color:"skyblue"}}>USER NAME OR MAIL</Text>
            <TextInput
             placeholder=""
             onChangeText={(text:any)=>setUserName(text)}
             style={{fontSize:15,width:400,borderWidth:1}}
            />
            </View>
            
            <Text style={{alignSelf:"flex-start",color:"grey",fontSize:15,margin:2}}>Use Phone number instead</Text>
            <View style={{alignSelf:"flex-start",margin:10}}>
              < Text style={{fontSize:15,fontWeight:"bold",color:"skyblue"}}>PASSWORD</Text>
             <TextInput
             placeholder=""
             onChangeText={(text:any)=>setPassword(text)}
             secureTextEntry={true}
             style={{fontSize:15,width:400,borderWidth:1}}
            />
            </View>
            <View style={{justifyContent:"center",alignSelf:"center"}}>
             <Text style={{fontSize:15,fontWeight:"bold",color:"skyblue"}}>Forgot your Password ?</Text>
            </View>
           <View style={{marginTop:35,width:"50%",borderRadius:20}}>
           <Button title="Log In" onPress={()=>navigation.navigate("Home")}/>
           </View>
            
        </View>
        </>

    )
}
export default Login;