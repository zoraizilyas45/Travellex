import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../../Screens/Dashboard';
import Settings from '../../Screens/Settings';
import ProfileEditScreen from '../../Screens/ProfileEditScreen/screen/ProfileEditScreen';
import ScreenNames from '../../Helpers/ScreenNames';


const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: 'white',
                    zIndex: 100
                },

                drawerPosition: 'right'
            }}
            initialRouteName={ScreenNames.Dashboard}>
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="Profile" component={ProfileEditScreen} />
            <Drawer.Screen name='Settings' component={Settings} />

        </Drawer.Navigator>

    );
};
export default DrawerNavigator;