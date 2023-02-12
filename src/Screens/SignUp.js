import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Dimensions } from 'react-native';
import ScreenNames from '../Helpers/ScreenNames';
import { showToast, validateUserEmail } from '../Helpers/Utils';
import { GetCurrentUserDataAPI, writeUserData } from '../Helpers/ApiCalls';
import ModalDropdown from 'react-native-modal-dropdown-with-flatlist';
import colors from '../Helpers/colors';
import SvgImage from '../Helpers/SvgImage';


import BottomSheetComponent from '../Helpers/SimpleBottomSheet';
const screenWidth = Math.round(Dimensions.get('window').width);



import CustomActivityIndicator from '../Helpers/CustomActivityIndicator';
import auth from '@react-native-firebase/auth';

//import Icon from 'react-native-vector-icons/AntDesign';



const SignUp = ({ navigation }) => {
    const [Password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [Email, setEmail] = useState('')
    const [Age, setAge] = useState('')

    const [userName, setUserName] = useState('')
    const [userMobile, setUserMobile] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const bottomRef = useRef()
    const [typeOfAccount, setTypeOfAccount] = useState('')
    console.log('>>> typeOfAccount');
    console.log('>>> typeOfAccount ', typeOfAccount);
    const [typeOfAccountSelected, setTypeOfAccountSelected] = useState('')
    const [accountTypesArray, setAccountTypesArray] = useState([
        { name: 'Rider', type: 'rider' },

        { name: 'User', type: 'user' },
    ])
    console.log('=>=>21typeOfAccountSelected.type', typeOfAccountSelected.type)
    const signUpMailAndPassword = () => {
        console.log('=>=>21typeOfAccountSelected.type', typeOfAccountSelected.type)
        auth()
            .createUserWithEmailAndPassword(Email, Password)
            .then(async () => {
                console.log('User account created & signed in!');
                await GetCurrentUserDataAPI()
                await writeUserData({
                    name: firstName + ' ' + lastName,
                    email: Email,
                    firstName: firstName,
                    lastName: lastName,
                    userMobile: userMobile,
                    type: typeOfAccount,
                    Age: Age,


                })
                setIsLoading(false)
                navigation.navigate(ScreenNames.SignIn)
                // navigation.navigate(ScreenNames.DashboardHome)
            })
            .catch(error => {
                setIsLoading(false)
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    showToast('That email address is already in use!')
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                if (error.code === 'auth/network-request-failed') {
                    showToast('Network Error')
                }
                // console.error(error);
            });
    }
    const GropDownListing = () => {

        return (
            <View style={{
                flexDirection: 'row', marginTop: 20, borderRadius: 10,
                borderWidth: 1, alignItems: 'center', width: '98%',
            }}>
                <ModalDropdown
                    defaultValue={typeOfAccount ? typeOfAccount : 'Type of Account'}
                    options={accountTypesArray}
                    style={[{
                        // style={{ width: '45%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 10, }}

                        flex: 1,
                        // marginRight: 40,
                        width: screenWidth - 40,
                        marginHorizontal: 10,

                    },]}

                    textStyle={[{
                        //flex: 1,

                        alignSelf: 'flex-start',
                        paddingVertical: 10,
                        paddingLeft: 10,
                        paddingRight: 30,
                        color: colors.black,
                        backgroundColor: 'transparent',
                        // backgroundColor: 'red',
                        fontSize: 20,
                        width: screenWidth * 0.75,
                        borderRadius: 5,
                        // borderWidth: 0.5


                    },]}
                    dropdownStyle={[{
                        width: screenWidth * 0.75,
                        height: 80,
                        borderRadius: 6,
                        marginStart: 0,
                    }]}

                    renderRow={(value) =>
                        <View
                            style={{
                                width: '100%',
                                backgroundColor: colors.white,
                                justifyContent: 'center',
                            }}
                            pointerEvents="none"
                        >
                            {/* <SimpleLabel
                            color={colors.lightBlack}
                            fontSizeDropDown={fontSize14}
                            backgroundColor={'transparent'}
                            fontFamily={axiLightFontFamily.fontFamily}
                            padding={10}
                            title={value.name}
                            alignSelf={'flex-start'}
                            textAlign={I18nManager.isRTL ? 'right' : 'left'}
                            marginRight={I18nManager.isRTL ? 2 : 5}
                        /> */}
                            <Text style={{ color: colors.black, fontSize: 20, paddingVertical: 5, paddingStart: 10 }} >
                                {value.name}
                            </Text>
                        </View>
                    }
                    renderButtonText={(value) =>
                        // <SimpleLabel
                        //     color={props.dropDownTextColor ? props.dropDownTextColor : colors.white}
                        //     backgroundColor={'transparent'}
                        //     fontFamily={axiLightFontFamily.fontFamily}
                        //     fontSizeDropDown={fontSize14}
                        //     title={value.name}
                        //     padding={10}
                        //     alignSelf={'flex-start'}
                        //     justifyContent={'center'}
                        //     textAlign={I18nManager.isRTL ? 'right' : 'left'}
                        //     marginRight={I18nManager.isRTL ? 2 : 5}
                        // />
                        <Text>
                            {value.name}
                        </Text>
                    }
                    onSelect={(index) => {
                        setTypeOfAccount(accountTypesArray[index].name)
                        setTypeOfAccountSelected(accountTypesArray[index])
                    }}


                />
                <SvgImage
                    // source={DropDownIcon}
                    style={{ height: 20, width: 20, marginEnd: 5 }}
                />
            </View>
        )
    }
    const btnActionSignUp = () => {
        // if (userName === '') {
        //     showToast('Name is required!')
        // }
        // else
        if (firstName === '') {
            showToast('First Name is required!')
        }
        else if (firstName != [a - zA - Z]) {
            showToast('Name must be in Alphabets')

        }
        else if (lastName != [a - zA - Z]) {
            showToast('Name must be in Alphabets')

        }
        else if (lastName === '') {
            showToast('Last Name is required!')
        }
        else if (userMobile === '') {
            showToast('Mobile Number is required!')
        }
        else if (userMobile.length < 11) {
            showToast('Mobile Number is not Valid!')
        }
        else if (Email === '') {
            showToast('Email is required!')
        }
        else if (!validateUserEmail(Email)) {
            showToast('Enter Valid Email!')
        }

        else if (Password === '') {
            showToast('Password is required!')
        }
        else if (Password.length < 7) {
            showToast('Password should be at least 7 characters ')
        }
        else if (confirmPassword === '') {
            showToast('Confirm Password is required!')
        }
        else if (confirmPassword !== Password) {
            showToast('Password does not Matched!')
        }
        else if (Age <= 17) {
            showToast('Age Must be 18 or older')
        }
        else {
            setIsLoading(true)
            signUpMailAndPassword()
        }

        // navigation.navigate(Screeenames.AfterSignupScreen) 
    }
    return (

        <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#FFFFFF', }}>
            <ScrollView>
                <CustomActivityIndicator
                    isLoading={isLoading}
                />
                <View>
                    <Image
                        source={require('../Assets/Logo.png')}
                        style={{
                            marginLeft: 80,
                            width: 180,
                            height: 200,
                            marginTop: 5,


                        }}

                    />


                    <View style={{ flex: 1, marginTop: -50, }}>
                        <TextInput
                            placeholder='First Name'
                            value={firstName}
                            style={{ width: '45%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 10, }}
                            onChangeText={(text) => setFirstName(text)}
                        />

                        <TextInput
                            placeholder='Last Name'
                            value={lastName}
                            style={{ width: '45%', borderWidth: 1, borderRadius: 10, marginTop: -50, paddingStart: 10, marginLeft: 170, }}
                            onChangeText={(text) => setLastName(text)}
                        />
                        <TextInput
                            placeholder='Mobile No'
                            value={userMobile}
                            style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20 }}
                            onChangeText={(text) => setUserMobile(text)}
                            keyboardType='phone-pad'
                            maxLength={11}
                        />
                        <TextInput
                            placeholder='Email Address'
                            value={Email}
                            style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20 }}
                            onChangeText={(text) => setEmail(text)}
                            keyboardType='email-address'
                        />
                        {GropDownListing()}
                        <TextInput
                            placeholder='Enter Your Age'
                            keyboardType='phone-pad'
                            maxLength={60}
                            value={Age}
                            style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20 }}
                            onChangeText={(text) => setAge(text)}

                        />
                        <TextInput
                            placeholder='Password'
                            secureTextEntry={true}
                            value={Password}
                            style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20 }}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TextInput
                            placeholder='Confirm Password'
                            secureTextEntry={true}
                            value={confirmPassword}
                            style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20 }}
                            onChangeText={(text) => setConfirmPassword(text)}
                        />
                    </View>
                    <View style={{ flex: 1, marginTop: 10, }}>
                        <TouchableOpacity
                            style={{ width: '90%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20, backgroundColor: '#FFA500', marginLeft: 15, height: 40, }}
                            onPress={() => {
                                btnActionSignUp()
                            }} >
                            <Text style={{ textAlign: 'center', padding: 8, color: 'white', fontWeight: 'bold', }} >Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, }}>
                        <Text style={{ textAlign: 'center', padding: 5, }}>Already Have an account?</Text>
                        <TouchableOpacity
                            style={{ width: '40%', paddingStart: 6, marginLeft: 100, }}
                            onPress={() => {
                                navigation.navigate(ScreenNames.SignIn)
                            }} >
                            <Text style={{ textAlign: 'center', padding: 5, color: '#FFA500', fontWeight: 'bold', fontSize: 15, textDecorationLine: 'underline' }} >Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <BottomSheetComponent
                    title={true}
                    ref={bottomRef}
                //sheetData={renderPicture}
                />
            </ScrollView>

        </View>
    )
}

export default SignUp