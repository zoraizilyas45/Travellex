import { View, Text, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenNames from '../Helpers/ScreenNames';
import SearchResultsScreen_1 from './SearchResults/index1';


const ListArea = ({ navigation }) => {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate(ScreenNames.CityLists)
                }}>
                    <Icon name='arrow-back' size={30} style={{ color: '#FFA500', margin: 15, marginLeft: 5, }} />

                </TouchableOpacity>
            </View>
            <SearchResultsScreen_1 />
        </View>
    )
}

export default ListArea