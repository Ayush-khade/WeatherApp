// // In App.js in a new project

// import * as React from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import CapitalDetails from './screens/CapitalDetails';
// import CountryDetails from './screens/CountryDetails';

// const HomeScreen=({navigation}:any)=> {
//   const [country,setCoutry] = React.useState('');

//   const getCountry = () => {
//     return fetch('https://restcountries.com/v3.1/name/'+country+'?fullText=true')
//       .then(response => response.json())
//       .then(json => {
//         console.log(json[0].capital[0]);
//         console.log(json[0].region);
//         console.log(json[0].languages.hin);
//         console.log(json[0].translations.bre.official);

//         console.log(json[0].flags.png);
//         let data:any={
//           capital:json[0].capital[0],
//           region:json[0].region,
//           flags:json[0].flags.png,
//           language:json[0].languages.hin,
//           translations:json[0].translations.bre.official
//         };
//         navigation.navigate('CountryDetails',{data:data});
//       })
//       .catch((error:any) => {
//         console.error(error);
//       });
//   };
 
//   return (<>
//     <View style={{flex:1,  alignItems: 'center', justifyContent: 'center',backgroundColor:"#000000" }}>
//       <Text>This is Hemant Sonkusare!</Text>
//       <TextInput
//       style={{borderWidth:2,borderColor:"#ffffff",color:"#ffffff",padding:10,margin:1,borderRadius:20,textAlign:"left",height:50,width:"90%"}}
//       placeholder='Enter Country Name'
//       placeholderTextColor={"red"}
//       value={country}
//       onChangeText={setCoutry}
//       />
     
//     </View>
//     <View style={{}}>
//     <TouchableOpacity 
//     //onPress={[getCountry,navigation.navigate('CountryDetails'),{}]}
//     onPress={()=>{
//       getCountry();
//     }}
//     style={{ alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,borderColor:"#ffffff"}}>
//       <Text style={{fontSize:20}}>GetCountry</Text>
//     </TouchableOpacity>
//     </View>
//     </>
//   );
// }

// const Stack = createNativeStackNavigator();

// const App=()=> {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='HomeScreen'>
//         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//         <Stack.Screen name="CountryDetails" component={CountryDetails} />
//         <Stack.Screen name="CapitalDetails" component={CapitalDetails} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;



import React from "react";
import {View,Text} from 'react-native'

const App=()=>{
<>
<Text>Hemant Sonkusare!</Text>
</>
}
export default App;