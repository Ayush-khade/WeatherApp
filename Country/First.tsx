import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
const First = ({navigation}:any) => {
    const [countryName, setCountryName] = useState("")
    const next = () => {
        fetch('https://restcountries.com/v3.1/name/'+countryName+'?fullText=true')
            .then(response => response.json())
            .then((json:any) => {
                // console.log(json[0].flags.png);
                // console.log(json[0].capital[0]);
                // console.log(json[0].timezones[0]);
                // console.log(json[0].continents[0]);
                let countryData:any={
                    flag:json[0].flags.png,
                    cap:json[0].capital[0],
                    tz:json[0].timezones[0],
                    cnt:json[0].continents[0]
                }
                navigation.navigate("Second",{data:countryData})
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <View style={{ flex: 1, backgroundColor: "pink", justifyContent: "center", margin: 10,alignItems:"center" }}>
            <Text style={{ fontSize: 25, fontWeight: "bold", alignSelf: "center" }}> _ENTER COUNTRY_</Text>
            <View style={{ backgroundColor: 'white', marginTop: 34 }}>
                <TextInput
                    placeholder="Country_Name"
                    onChangeText={(txt: any) => { setCountryName(txt) }}
                    style={{ width: "auto", height: "auto", borderWidth: 2 }}
                />
            </View>

            <View style={{ marginTop: 10 }}>
                <Button title="Submit" onPress={()=>{next()}}/>
            </View>

        </View>
    )
}
export default First;

