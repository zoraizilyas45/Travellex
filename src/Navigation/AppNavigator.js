import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, TabActions } from '@react-navigation/native';

import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import ForgetPasswordScreen from '../Screens/ForgetPasswordScreen/screen/Forgetscreen';
import Dashboard from '../Screens/Dashboard';
import Capital from '../Screens/Capital';
import Khunjerab from '../Screens/Khunjerab';
import Atd from '../Screens/Atd';
import OrderRide from '../Screens/OrderRide';
import CityLists from '../Screens/CityLists';
import ListCity from '../Screens/ListCity';
import ListArea from '../Screens/ListArea';
import Countries from '../Screens/Countries';
import HomeTabNavigator from './BottomNavigator/Hometabnavigator';
import DrawerNavigator from './DrawerNavigation/DrawerNavigation';
import Profile from '../Screens/Profile';
import Rider from '../Screens/Rider';
import ProfileEditScreen from '../Screens/ProfileEditScreen/screen/ProfileEditScreen';
import Settings from '../Screens/Settings';

import ScreenNames from '../Helpers/ScreenNames';





const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
    //const Tab = createBottomTabNavigator();



    return (


        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}

            initialRouteName={ScreenNames.SignIn}
        >


            <Stack.Screen name={ScreenNames.SignIn} component={SignIn} />
            <Stack.Screen name={ScreenNames.SignUp} component={SignUp} />
            <Stack.Screen name={ScreenNames.Dashboard} component={Dashboard} />
            <Stack.Screen name={ScreenNames.Capital} component={Capital} />
            <Stack.Screen name={ScreenNames.Khunjerab} component={Khunjerab} />
            <Stack.Screen name={ScreenNames.Atd} component={Atd} />
            <Stack.Screen name={ScreenNames.CityLists} component={CityLists} />
            <Stack.Screen name={ScreenNames.ListCity} component={ListCity} />
            <Stack.Screen name={ScreenNames.ListArea} component={ListArea} />
            <Stack.Screen name={ScreenNames.Countries} component={Countries} />
            <Stack.Screen name={ScreenNames.OrderRide} component={OrderRide} />
            <Stack.Screen name={ScreenNames.Profile} component={Profile} />
            <Stack.Screen name={ScreenNames.Rider} component={Rider} />
            <Stack.Screen name={ScreenNames.HomeTabNavigator} component={HomeTabNavigator} />
            <Stack.Screen name={ScreenNames.DrawerNavigator} component={DrawerNavigator} />
            <Stack.Screen name={ScreenNames.Settings} component={Settings} />

            <Stack.Screen name={ScreenNames.ProfileEditScreen} component={ProfileEditScreen} />
            <Stack.Screen name={ScreenNames.ForgetPasswordScreen} component={ForgetPasswordScreen} />
        </Stack.Navigator>

    );

}
export default AppNavigator