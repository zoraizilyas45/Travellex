import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native';
import ScreenNames from '../Helpers/ScreenNames';


import Icon from 'react-native-vector-icons/MaterialIcons';
const Capital = ({ navigation }) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#FFFFFF', marginTop: 10 }}>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate(ScreenNames.HomeTabNavigator)
                }}>
                    <Icon name='arrow-back' size={30} style={{ color: '#FFA500', margin: 15, marginLeft: -5, }} />

                </TouchableOpacity>
            </View>
            <ScrollView>
                <View><Image style={{ marginTop: 20, height: 250, width: 330, resizeMode: "stretch", borderTopRightRadius: 40, borderBottomLeftRadius: 40, borderTopLeftRadius: 60, borderBottomRightRadius: 60, marginRight: 30 }} source={require('../Assets/Mosque.jpg')}
                />
                </View>
                <View style={{ marginTop: 40, }}>
                    <Text style={{ fontSize: 24, textAlign: 'left', color: 'black', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', }} >
                        Capital of Punjab,Pakistan
                    </Text>

                    <Icon name="place" size={30} style={{ color: '#FFA500', width: '25%', height: 50, borderRadius: 10, marginTop: 10, justifyContent: 'center', marginLeft: 15, }} />
                    <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: '#999', marginRight: 150, marginTop: -55, }} >Pakistan</Text>
                </View>
                <View style={{ marginTop: 10, justifyContent: 'space-between', flexDirection: 'row', }}>
                    <Text style={{ fontSize: 24, textAlign: 'left', color: 'black', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', }} >
                        Services
                    </Text>
                </View>

                <ScrollView horizontal={true} >
                    <View style={{ marginTop: 15, justifyContent: 'space-between', flexDirection: 'row', }}>
                        <Icon name="hotel" size={30} style={{ color: '#FFA500', margin: 15 }} />
                        <Icon name="flight-takeoff" size={30} style={{ color: '#FFA500', margin: 15 }} />
                        <Icon name="store" size={30} style={{ color: '#FFA500', margin: 15 }} />
                        <Icon name="pool" size={30} style={{ color: '#FFA500', margin: 15 }} />
                        <Icon name="commute" size={30} style={{ color: '#FFA500', margin: 15 }} />
                        <Icon name="local-cafe" size={30} style={{ color: '#FFA500', margin: 15 }} />
                        <Icon name="local-hospital" size={30} style={{ color: '#FFA500', margin: 15 }} />
                        <Icon name="directions-bike" size={30} style={{ color: '#FFA500', margin: 15 }} />
                    </View>
                </ScrollView>
                <View>
                    <Text style={{ textAlign: 'center', padding: 5, fontSize: 15, color: '#FFA500', marginLeft: -10, marginTop: -7, }} >Lahore is the city of wonders with a rich history of over a millennium. Lahore the 2nd largest city of Pakistan and is capital of province Punjab. {"\n"}Lahore is referred to as cultural heart of Pakistan as it hosts most of the arts, cuisine, festivals, music, film-making & gardening of the country.</Text>
                </View>
                <View>
                    <TouchableOpacity

                        style={{ width: '98%', height: 70, borderWidth: 0, borderRadius: 10, marginTop: 30, justifyContent: 'center', backgroundColor: '#FFA500', }}
                        onPress={() => {
                            navigation.navigate(ScreenNames.CityLists)
                        }} >

                        <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: 'white', marginLeft: 25, marginTop: 5, }} > View More</Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

export default Capital