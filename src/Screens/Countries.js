import { View, Text, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenNames from '../Helpers/ScreenNames';


const Countries = ({ navigation }) => {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate(ScreenNames.CityLists)
                }}>
                    <Icon name='arrow-back' size={30} style={{ color: '#FFA500', margin: 15, marginLeft: 5, }} />

                </TouchableOpacity>
            </View>
            <View>
                <Image style={{ marginTop: 0, height: 400, width: 360, marginRight: 30, borderRadius: 15, }} source={require('../Assets/Soon.jpg')} />
            </View>

        </View>
    )
}

export default Countries