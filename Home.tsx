// import React, { useState } from 'react';
// import { Text, View, Button, TextInput } from 'react-native';

// const Home = () => {
//     const [data, setdata] = useState("");
    
//     const Submit=()=>{
//         return fetch('https://restcountries.com/v3.1/name/'+data+'?fullText=true')
//     .then(response => response.json())
//     .then(json => {
//       console.log(json);
//     })
//     .catch(error => {
//       console.error(error);
//     });

//         console.log("ok")
//     }
//     return (<>
//         <View style={{ flex: 1, backgroundColor: "beige", justifyContent: "center", alignItems: "center" }}>
//             <Text style={{ fontSize: 40, fontWeight: "900", alignSelf: "center", color: "blueviolet", }}>Enter Country</Text>
//             <TextInput placeholder="Enter Searching" onChangeText={(t: any) => { setdata(t) }}
//                 style={{ height: "10%", width: "80%", borderWidth: 3, fontSize: 20 }}></TextInput>
//             <View style={{ marginTop: 30, width: "100%" }}>
//                 <Button title="Click" onPress={() =>{Submit()}} />
//             </View>

//         </View>
//     </>)
// }

// export default Home;
