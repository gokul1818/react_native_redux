import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Modaltest = () => {
    const [modal, setmodal] = useState(false)
    const openmodal = () => {
        setmodal(true)
        setTimeout(() => {
            setmodal(false)
        }, 2000);

    }
    useEffect(() => {
        openmodal()
    }, [])

    return (
        <View>
            <Modal visible={modal} onRequestClose={() => setmodal(false)} animationType='fade' >
                <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                    <View style={{ backgroundColor: '#fff', height: 280, margin: 20 }} >
                        <View style={{ alignItems: 'center', backgroundColor: '#2c7cc1', height: 50, justifyContent: 'center' }}>

                            <Text style={styles.modaldemo}>OpenModal Demo!</Text>
                        </View>
                        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', paddingHorizontal: 30, }}>
                            <Text style={{ color: '#000', textAlign: 'center', fontSize: 22 }}>
                                Hey Welcome back
                            </Text>
                        </View>
                        {/* <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: '#fff', height: 50, justifyContent: "space-around" }}>
                            <Pressable android_ripple={{ color: '#000' }} onPress={() => setmodal(false)}>

                                <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}  >cancel</Text>
                            </Pressable>
                            <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }} onPress={() => setmodal(false)}>Ok</Text>

                        </View> */}
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Modaltest

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        marginHorizontal: 20,

    },
    modaldemo: {
        color: "#fff"
        , fontSize: 22
        , alignItems: 'center',


    },

    modalbtn: {
        fontSize: 20
        ,
        padding: 20,
        borderRadius: 20,
        fontWeight: "bold",
        backgroundColor: "#fff",
        color: '#000'
        , margin: 10,

    }
})