import React from "react";
import { Text,TextInput,View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import First from './Country/First';
import Secondscreen from "./Country/Secondscreen";
import Third from "./Country/Third";


const stack=createNativeStackNavigator();

const App=()=>{
  return(
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen name="First" component={First}/>
      <stack.Screen name="Second" component={Secondscreen}/>
      <stack.Screen name="Third" component={Third}/>
      </stack.Navigator>
    </NavigationContainer>
    
  )
}
export default App;




//////////////////////snapchat//////////////
// import React from "react";
// import { Text,View,TextInput,Button} from "react-native";
// import Front from "./Screen/Front";
// import Home from "./Screen/Home";
// import Login from "./Screen/Login";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// const Stack=createNativeStackNavigator();
// const App=()=>{
//   return(
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Front" component={Front}/> 
//          <Stack.Screen name="Login" component={Login}/>
//          <Stack.Screen name="Home" component={Home}/> 
//       </Stack.Navigator>
//     </NavigationContainer>

//   )
// }
// export default App;