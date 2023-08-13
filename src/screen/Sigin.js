import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/action'
import PushNotification from "react-native-push-notification";

const Sigin = ({ navigation }) => {
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch()
    const handlesubmit = () => {
        if (name === "Gokul" && password === "1234") {
            try {
                var user = {
                    name: name,
                    password: password
                }

                dispatch(setUser(user))
                navigation.navigate("Home")
            } catch (error) {
                console.log(error)
            }
        }
        else {
            ToastAndroid.showWithGravity("please enter valid username and password", ToastAndroid.SHORT, ToastAndroid.CENTER)
        }
    }
    const createchannel = () => {
        PushNotification.createchannel({
            channelID: 'test',
            channenlName: 'channel'
        })

    }
    useEffect(() => {
        createchannel()
    }, [])
    return (
        <View style={styles.body} >

            <StatusBar
                backgroundColor={"#e2e2e2"}
            ></StatusBar>
            <View style={styles.header}>

                <Text style={styles.heading}>Hello Again!</Text>
                <Text style={[styles.heading, { marginTop: 20, fontSize: 25, fontWeight: '500', color: '#787772' }]}>Welcome back you've
                </Text>
                <Text style={[styles.heading, { marginTop: 0, fontSize: 25, fontWeight: '500', color: '#787772' }]}>
                    been missed !</Text>
            </View>
            <View style={styles.input}>
                <TextInput style={styles.inputbox} placeholder='Username'
                    placeholderTextColor={"grey"}
                    onChangeText={value => setname(value)}
                />

                <TextInput style={styles.inputbox} placeholder='password'
                    onChangeText={value => setpassword(value)}

                    placeholderTextColor={"grey"}
                />
                <View style={{ alignItems: 'flex-end' }}>

                    <Text style={styles.forget}>Recovery Password?</Text>
                </View>
            </View>
            <View style={styles.input}>
                <TouchableOpacity style={styles.btn} onPress={handlesubmit}>
                    <Text style={styles.signinbtn}>
                        sign in
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.dash}>
                <Text style={styles.continue}>
                    or continue with
                </Text>
            </View>

            <View style={styles.social}>
                <View style={{ backgroundColor: '#eee', width: 80, height: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 10, }}>
                    <Image style={styles.image} source={{ uri: 'https://th.bing.com/th/id/OIP.3rpkAU46z2o09027TyhnmAHaHa?pid=ImgDet&rs=1' }}></Image>
                </View>
                <View style={{ backgroundColor: '#eee', width: 80, height: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 10, }}>
                    <Image style={styles.image} source={{ uri: 'https://th.bing.com/th/id/OIP.n3q8I2opS3wxI0tseP8rvwHaHZ?pid=ImgDet&rs=1' }}></Image>
                </View>
                <View style={{ backgroundColor: '#eee', width: 80, height: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 10, }}>
                    <Image style={styles.image} source={{ uri: 'https://th.bing.com/th?id=OIP.fap_AkjkpqeKi1h_g4s5PQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' }}></Image>
                </View>

            </View>
            <View style={{ marginVertical: 30 }}>

                <Text style={{ color: '#000' }}>Not a member? <Text style={{ color: '#8665a4' }}>Register Now?</Text></Text>
            </View>
        </View>
    )
}

export default Sigin

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#e2e2e2'

    },
    header: {
        marginTop: 60,
        alignItems: 'center'
    },
    heading: {
        color: '#000',
        fontSize: 35,
        fontWeight: "700",
        marginTop: 30,

    },
    inputbox: {
        width: "100%",
        color: '#000',
        paddingLeft: 20,
        backgroundColor: '#ffffff',
        height: 60,
        borderRadius: 15,
        marginTop: 20,
    },
    input: {
        width: '80%',
        marginTop: 20,

    },
    forget: {
        color: "#000",
        marginTop: 20,
    },
    btn: {
        backgroundColor: '#ff4755',
        width: "100%",
        // paddingLeft: 30,
        height: 60,
        borderRadius: 15,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signinbtn: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "700",
    }, dash: {
        // borderBottomWidth:1,
        width: '100%',
        marginVertical: 30,
        alignItems: 'center',
        position: 'relative',
    },
    continue: {
        marginVertical: 30,
        color: '#000',
        fontSize: 15,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#eee',
    },
    social: {
        // flex: 1,
        width: '70%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    }

})