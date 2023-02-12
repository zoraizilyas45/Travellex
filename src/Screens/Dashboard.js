import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, FlatList, StyleSheet, Pressable } from 'react-native';
import ScreenNames from '../Helpers/ScreenNames';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import HomeTabNavigator from '../Navigation/BottomNavigator/Hometabnavigator';
import { getOrdersRideAPI } from '../api/Api';
import Search from './Search';
import { getUserData } from '../Helpers/ApiCalls';
import { SearchBar } from 'react-native-elements';
import colors from '../Helpers/colors';
const Dashboard = ({ navigation }) => {
    const [userName, setUserName] = useState('')
    const [picUrl, setPicUrl] = useState('')
    const [fuelOrdersList, setRideOrdersList] = useState([])

    useEffect(() => {
        getRideOrderApi()
    }, [])
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            await getUserDataAPI()
        });

        return unsubscribe;
    }, [navigation]);

    const getRideOrderApi = async () => {
        setIsLoading(true)
        await getUserDataAPI()
        setIsLoading(false)
    }
    const getUserDataAPI = async () => {

        let user = await getUserData()
        user = user._data
        console.log('>>> user >>', user);
        setUserName(user.name)
        setPicUrl(user.profileUrl)
        setTypeUser(user.type)
        setUserObj(user)


    }


    console.log('>>Search', Search)

    useEffect(() => {
        getorders()
    }, [])

    const getorders = async () => {
        let orders = await getOrdersRideAPI()
        // console.log('>>> orders ', orders);
    }
    const [SerachResult, SetSearchResult] = useState([])
    const [SerachText, SetSearchText] = useState('')
    const onChangeFunc = (text) => {

        // let result = Search.filter(item => item.name.includes(text));
        SetSearchText(text)
        let result = Search.filter(item => {
            return Object.keys(item).some(key => {
                return String(item[key])
                    .toLowerCase()
                    .includes(text.toLowerCase());
            });
        });


        // var result = Search.filter(function (o) {           // for each object o in the array bikeshops
        //     return o.name.indexOf(text) !== -1;
        // });
        console.log('>>> ', text, '>>> ', result);
        SetSearchResult(result)
    }
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#FFFFFF', }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center', }} >
                    <Text style={{ marginTop: 20, fontSize: 24, color: 'black', marginLeft: 15 }} >
                        Welcome
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(ScreenNames.ProfileEditScreen)}
                        style={{ height: 50, width: 50, backgroundColor: 'pink', borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginRight: -10 }} >
                        {
                            picUrl ?
                                <SvgImage
                                    source={{ uri: picUrl }}
                                    style={{ height: 50, width: 50, backgroundColor: 'pink', borderRadius: 25, marginRight: 10, }}
                                />
                                :
                                <Text style={{ color: colors.black, fontSize: 28 }} >
                                    {
                                        userName ?
                                            userName[0] :
                                            'C'}
                                </Text>
                        }
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', }} >
                    <Text style={{ marginTop: 10, fontSize: 24, textAlign: 'center', color: 'black', }} >
                        Mr. {userName}
                    </Text>
                </View>



                <Text style={{ marginTop: 10, fontSize: 24, textAlign: 'left', color: 'black', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', }} >
                    Get Ready For {"\n"}The Travel Trip!
                </Text>
                {/* <TouchableOpacity style={{ marginLeft: 280, marginTop: -60 }}
                    onPress={() => {
                        navigation.navigate(ScreenNames.DrawerNavigator)
                    }}>
                    <Text></Text><Icon name='person' size={45} style={{ color: '#FFA500' }} />
                </TouchableOpacity> */}
                <View >
                    <TouchableOpacity>
                        <View>
                            <Icon name="search" size={30} style={{ color: '#FFA500', marginTop: 30, marginLeft: 10, marginRight: 20, }} />
                            <TextInput
                                value={SerachText}
                                placeholder='         Find your location...'
                                style={{ width: '100%', borderWidth: 1, borderRadius: 10, marginTop: -42, marginRight: 40, paddingStart: 20, borderColor: '#D3D3D3', }}
                                onChangeText={onChangeFunc}

                            />
                        </View>


                    </TouchableOpacity>





                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate(ScreenNames.ListCity)
                }}>
                    <FlatList
                        data={SerachText && SerachText !== '' ? SerachResult : []}
                        renderItem={({ item }) => {
                            return (
                                <View>



                                    <Text>{item.name}</Text>



                                </View>

                            )
                        }}
                    />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', }} >
                    <Text style={{ marginTop: 10, fontSize: 24, textAlign: 'left', color: 'black', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', }} >
                        My Location
                    </Text>
                </View>


                <View >

                    <TouchableOpacity

                        style={{ width: '98%', height: 120, borderWidth: 0, borderRadius: 10, marginTop: 30, justifyContent: 'center', backgroundColor: '#D3D3D3', }}
                        onPress={() => {
                            navigation.navigate(ScreenNames.Capital)
                        }} >

                        <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: 'black', marginLeft: 30, marginTop: -20, }} > Summers in Lahore</Text>
                        <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: '#999', }} >Pakistan</Text>
                        <Icon name="place" size={30} style={{ color: '#FFA500', width: '25%', height: 50, borderRadius: 10, marginTop: -35, justifyContent: 'center', marginLeft: 90, }} />
                        <Text style={{ textAlign: 'center', padding: 5, fontSize: 12, color: '#999', marginLeft: 80, marginTop: -7, }} >Pakistan there is so much more to discover.{"\n"}Read more about Lahore.</Text>

                        <Image style={{
                            marginTop: -100,
                            borderRadius: 15,
                            marginLeft: 10,

                            height: 80,
                            width: 80
                        }} source={require('../Assets/Lahore.jpg')}


                        />
                    </TouchableOpacity>

                </View>
                <View style={{ justifyContent: 'center', marginTop: 20, }} >

                    <Text style={{ marginTop: 2, fontSize: 24, textAlign: 'left', color: 'black', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', }} >
                        Best Places
                    </Text>
                </View>




                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                    <ScrollView horizontal={true}>
                        <View style={{ width: '55%' }}>


                            <TouchableOpacity

                                style={{ width: '90%', height: 130, borderWidth: 0, borderRadius: 10, marginTop: 15, justifyContent: 'center', }}
                                onPress={() => {
                                    navigation.navigate(ScreenNames.Khunjerab)
                                }} >

                                <Image style={{ marginTop: 0, height: 130, width: 230, resizeMode: "stretch", marginRight: 30, borderRadius: 15, }} source={require('../Assets/khunjrab.jpg')}
                                />
                                {/* <View><Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: 'black', marginTop: 80, }} >Khunjrab Pass</Text>
                                </View> */}
                            </TouchableOpacity>

                        </View>

                        <View style={{ width: '55%' }} >
                            <TouchableOpacity
                                style={{ width: '90%', height: 130, borderWidth: 0, borderRadius: 10, marginTop: 15, justifyContent: 'center', }}
                                onPress={() => {
                                    navigation.navigate(ScreenNames.Atd)
                                }} >
                                <Image style={{ marginTop: 0, height: 130, width: 230, resizeMode: "stretch", marginRight: 30, borderRadius: 15, }} source={require('../Assets/Atd.jpg')} />
                                {/* <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: 'black', }} >Abbotabad</Text>  */}
                            </TouchableOpacity>
                        </View>









                    </ScrollView>
                </View >




                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>



                    <TouchableOpacity
                        style={{ width: '99%', height: 60, borderWidth: 0, borderRadius: 10, marginTop: 15, justifyContent: 'center', backgroundColor: '#FFA500', }}
                        onPress={() => {
                            navigation.navigate(ScreenNames.CityLists)
                        }} >
                        <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: 'black', }} >Find More</Text>
                    </TouchableOpacity>

                </View>

                {/* <View style={{ justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#D3D3D3', borderRadius: 10, width: 363, marginLeft: -20 }}>
                    <TouchableOpacity
                        style={{ width: '25%', height: 50, borderRadius: 10, marginTop: 5, justifyContent: 'center', marginLeft: 15, }}
                        onPress={() => {
                            navigation.navigate(ScreenNames.Dashboard)
                        }}
                    >
                        <Icon name="home" size={30} style={{ color: '#FFA500' }} />

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: '25%', height: 50, borderRadius: 10, marginTop: 5, justifyContent: 'center', marginLeft: 10, }}
                        onPress={() => {
                            navigation.navigate(ScreenNames.Notification)
                        }}
                    >
                        <Icon name="notifications" size={30} style={{ color: '#FFA500' }} />



                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: '25%', height: 50, borderRadius: 10, marginTop: 5, justifyContent: 'center', marginLeft: 15, }}
                        onPress={() => {
                            navigation.navigate(ScreenNames.Map)
                        }}
                    >
                        <Icon name="place" size={30} style={{ color: '#FFA500' }} />

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: '25%', height: 50, borderRadius: 10, marginTop: 5, justifyContent: 'center', marginRight: 10, }}
                        onPress={() => {
                            navigation.navigate(ScreenNames.User)
                        }}
                    >
                        <Icon name="account-circle" size={30} style={{ color: '#FFA500' }} />

                    </TouchableOpacity>

                </View>


 */}




            </View >


        </ScrollView >


    );

}

export default Dashboard

