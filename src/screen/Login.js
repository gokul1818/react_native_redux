import { ImageBackground, Image, StyleSheet, TouchableOpacity, Text, TextInput, View, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/action'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer)
    console.log(user, "out")
    const [number, setnumber] = useState("")
    const [password, setpassword] = useState("")
    console.log(number, password)

    const handlesubmit = async () => {
        if (number === "1234567890" && password === "12341234") {
            try {
                var User = {
                    number: number,
                    Password: password,
                }
                await saveData('user', User);
                dispatch(setUser(User))
            } catch (error) {
                console.log(error)
            }
            navigation.navigate("Home")
            setnumber("")
            setpassword('')
        } else {
            ToastAndroid.showWithGravity("Please enter a valid number or password", ToastAndroid.SHORT, ToastAndroid.CENTER)
            setnumber('')
            setpassword('')
        }
    }
    const saveData = async (key, value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.body} >
            {/* <ImageBackground style={styles.background} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4m92pnLReU66jdf6Nuy-LZFE9p0bLM1M9GP-YUrRoVHgW77rvPcgCQh7mPPnkUlcfc8Q&usqp=CAU' }}> */}

            <Text style={styles.header}>Login</Text>
            <TextInput
                placeholder='Mobile Number'
                keyboardType="phone-pad"
                placeholderTextColor={"grey"}
                style={styles.inputfiled}
                maxLength={10}
                onChangeText={(value) => setnumber(value)}
                value={number}
            >
            </TextInput>
            <TextInput
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={(value => setpassword(value))}
                placeholderTextColor={"grey"}
                value={password}
                style={styles.inputfiled}>


            </TextInput>
            <View style={styles.button} >

                <TouchableOpacity style={styles.loginbtn} >
                    <Text style={styles.btnlabel} onPress={handlesubmit}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.textlabel, { marginTop: 0 }]}>
                Forget Password?
            </Text>
            <View style={{ borderBottomWidth: 1, marginTop: 20, marginBottom: 10, borderStyle: "solid", borderColor: '#cacbcf', width: '100%', justifyContent: 'center', alignItems: 'center' }} >
                <Text style={styles.signuplabel}>
                    Sign up With
                </Text>
            </View>
            <View style={{ width: '80%', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'flex-start' }}>
                <TouchableOpacity style={styles.signbtn}>
                    <Text style={{ color: "#20d5d8" }}>GOOGLE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signbtn}>
                    <Text style={{ color: "#20d5d8" }}>EMAIL</Text>
                </TouchableOpacity>
            </View>
            {/* </ImageBackground> */}
        </View >
    )
}

export default Login

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-around',
        backgroundColor: "#f9f9f5",
        width: "100%",
        height: '100%'
    },
    background: {
        width: "100%",
        height: '100%',

    },
    header: {
        color: "#000",
        marginVertical: 60,
        fontSize: 50,
        fontWeight: "bold",
        // backgroundColor:'green'
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    inputfiled: {
        width: '85%',
        borderColor: "#eeeeee",
        borderWidth: 1,
        height: 50,
        marginBottom: 20,
        backgroundColor: '#ffffff',
        paddingLeft: 20,
        borderRadius: 50,
        color: '#000'
    },
    button: {
        backgroundColor: '#20d5d8',
        width: '85%',
        borderColor: "#eeeeee",
        borderWidth: 1,
        height: 50,
        color: "#fff",
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        paddingLeft: 20,
        borderRadius: 50
    },
    loginbtn: {
        alignItems: 'center'
        ,
        justifyContent: 'center',
    },
    btnlabel: {
        fontSize: 15,
        // fontWeight: 'bold',
        letterSpacing: 3,
        color: '#fff'

    },
    textlabel: {
        marginVertical: 20,
        fontSize: 15,
        color: '#000'
    },
    signbtn: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 50,
        borderColor: "#20d5d8",
        backgroundColor: '#ffffff',
    }, signuplabel: {
        color: '#cacbcf',
        backgroundColor: '#fff',
        padding: 10,
        position: 'absolute',
        backgroundColor: "#f9f9f5",


    }
})