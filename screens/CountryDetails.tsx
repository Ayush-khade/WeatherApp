import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


const CountryDetails = ({ route, navigation }: any) => {
    const { capital, region, translations, language } = route.params.data;


    const getCapital = () => {
        return fetch('http://api.weatherstack.com/current?access_key=38354a657d7a3a01cfcdee8c9cac5db8&query=New%20Delhi')
            .then(response => response.json())
            .then(json => {
                console.log(json.request.query)
                console.log(json.location.name);
                console.log(json.location.country);
                console.log(json.current.weather_descriptions[0]);
                console.log(json.current.observation_time);
                console.log(json.current.temperature);
                // console.log(json.current.weather_icons);
                console.log(json.current.wind_degree);
                console.log(json.current.humidity);
                console.log(json.current.visibility);

                let data: any = {
                    query:json.request.query,
                    name:json.location.name,
                    country:json.location.country,
                    weather:json.current.weather_descriptions[0],
                    time:json.current.observation_time,
                    tempreture:json.current.temperature,
                    // icons:json.current.weather_icons,
                    degree:json.current.wind_degree,
                    humidity:json.current.humidity,
                    visibility:json.current.visibility

                }
                  navigation.navigate('CapitalDetails',{data:data})
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View style={{ flex: 1, backgroundColor: "#ffffff", margin: 5, justifyContent: "center", marginTop: 20 }}>
                <Image source={{ uri: "https://flagcdn.com/w320/in.png" }} style={{ height: "80%", width: "80%", justifyContent: "center", alignSelf: "center" }} />
            </View>
            <View style={{ flex: 2, backgroundColor: "#e667d7", flexDirection: "row", marginBottom: 40 }}>
                <View style={{ flex: 1, backgroundColor: "#4fd6c2", margin: 3 }}>

                    <View style={{ flex: 1, backgroundColor: "#3fbf97", margin: 2, justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, alignSelf: "center" }}>Capital:</Text>
                        <Text style={{ fontSize: 20, alignSelf: "center" }}>{capital}</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: "#a12325", margin: 2, justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, alignSelf: "center" }}>translations:</Text>
                        <Text style={{ fontSize: 20, alignSelf: "center" }}>{translations}</Text>

                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: "#db5c8b", flexDirection: "column", margin: 1 }}>
                    <View style={{ flex: 1, backgroundColor: "#5cdb7c", margin: 1, justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, alignSelf: "center" }}>language</Text>
                        <Text style={{ fontSize: 20, alignSelf: "center" }}>{language}</Text>

                    </View>
                    <View style={{ flex: 1, backgroundColor: "#3f76b0", margin: 1, justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, alignSelf: "center" }}>region:</Text>
                        <Text style={{ fontSize: 20, alignSelf: "center" }}>{region}</Text>
                    </View>
                </View>
            </View>
            <View style={{}}>
                <TouchableOpacity
                    //onPress={[getCountry,navigation.navigate('CountryDetails'),{}]}
                    onPress={() => {
                        getCapital();
                    }}
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#DDDDDD',
                        padding: 10, borderColor: "#ffffff"
                    }}>
                    <Text style={{ fontSize: 20 }}>GetCapital</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CountryDetails;