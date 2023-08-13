import { ScrollView, StyleSheet, Text, View, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import ProductList from './ProductList';
import { useSelector } from 'react-redux';
import Modaltest from './Modaltest';
import PushNotification from "react-native-push-notification";


const Home = () => {
    const user = useSelector(state => state.userReducer.user)
    const [modal, setmodal] = useState(false)

    const openmodal = () => {
        setmodal(true)
        setTimeout(() => {
            setmodal(false)
        }, 2000);

    }
    useEffect(() => {
        openmodal()
        handleNotification()
    }, [])
    const handleNotification = () => {
        PushNotification.localNotification({
            channelID: "test",
            title: 'hi',
            message: 'ghghsdp'
        })

    }


    console.log(user)
    return (
        <View>
            <StatusBar backgroundColor="#2c7cc1" />
            <Modal visible={modal} onRequestClose={() => setmodal(false)} animationType='fade' >
                <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: '#00000077' }}>
                    <View style={{ backgroundColor: '#fff', height: 280, margin: 20, borderRadius: 20 }} >
                        <View style={{ alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#2c7cc1', height: 50, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, color: '#fff' }}>Welcome back!</Text>
                        </View>
                        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', paddingHorizontal: 30, }}>
                            <Text style={{ color: '#000', textAlign: 'center', fontSize: 22 }}>
                                Successfully login
                            </Text>
                            <Text style={{ color: '#000', textAlign: 'center', fontSize: 22 }}>
                                {user.name}
                            </Text>
                        </View>

                    </View>
                </View>
            </Modal>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Hi, What's next?
                </Text>
                <View style={styles.headerlist}>
                    <FontAwesome5
                        name="film"
                        size={25}
                        color={"#fff"}
                    />
                    <Text style={[styles.show, { color: '#fff', fontWeight: '700' }]}>
                        Movies
                    </Text>
                    <FontAwesome5
                        name="tv"
                        size={25}
                    />
                    <Text style={styles.show}>Tv shows</Text>
                </View>
                <View style={{ marginTop: 30, marginLeft: 30 }}>
                    <ScrollView horizontal>

                        <View style={[styles.category, { backgroundColor: '#00000099' }]}>
                            <Text style={styles.categoryLabel}>
                                Action
                            </Text>
                        </View>
                        <View style={styles.category}>
                            <Text style={styles.categoryLabel}>
                                Love
                            </Text>
                        </View>
                        <View style={styles.category}>
                            <Text style={styles.categoryLabel}>
                                Crime
                            </Text>
                        </View>
                        <View style={styles.category}>
                            <Text style={styles.categoryLabel}>
                                Drama
                            </Text>
                        </View>
                        <View style={styles.category}>
                            <Text style={styles.categoryLabel}>
                                Horror
                            </Text>
                        </View>
                        <View style={styles.category}>
                            <Text style={styles.categoryLabel}>
                                Mystry
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <ProductList></ProductList>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    header: {
        height: 250,
        width: "100%",
        backgroundColor: '#2c7cc1',
        borderBottomLeftRadius: 70,
    },
    title: {
        fontSize: 30,
        color: "#fff",
        marginTop: 20,
        marginLeft: 30,
        fontWeight: '600',
    },
    headerlist: {
        flexDirection: 'row',
        marginLeft: 30,
        marginTop: 30,
        alignItems: 'center'
    },
    show: {
        fontSize: 20,
        marginLeft: 10,
        marginRight: 30,

    },
    category: {
        backgroundColor: '#00000049',
        borderRadius: 50,
        padding: 10,
        alignItems: 'center',
        marginHorizontal: 10,
        paddingHorizontal: 20,

    },
    categoryLabel: {
        fontSize: 15,
        color: "#fff"
    }

})