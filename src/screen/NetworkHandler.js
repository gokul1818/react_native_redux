import { Image, ImageBackground, StatusBar, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import NetInfo from "@react-native-community/netinfo";


const NetworkHandler = () => {

  

    return (
        <View style={styles.bg}>
            <StatusBar backgroundColor={"#000"} />
            <Image style={styles.image} source={require("../assets/no_network.webp")}></Image>

        </View>
    )
}

export default NetworkHandler

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
    ,
    image: {
        width: 350,
        height: 350,
    }
})