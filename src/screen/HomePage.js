import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setUser } from '../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomePage = ({ navigation }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user);
    const data = useSelector(state => state.userReducer.data);
    const loading = useSelector(state => state.userReducer.loading);

    const handlelogout = async () => {
        try {
            var User = {
                number: "",
                Password: "",
            }
            await saveData("user", User)
            dispatch(setUser(User))
            navigation.navigate("Login")
        }
        catch (error) {
            console.log(error)
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
    console.log('user', user)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    return (
        <View style={styles.container}>
            <View style={
                styles.header}>
                <Text style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 'auto', fontSize: 20, color: "#fff", marginLeft: 10 }}>
                    Welcome!
                </Text>
                <TouchableOpacity onPress={handlelogout} style={styles.logout}><Text style={
                    styles.logoutbtn
                }>Logout</Text></TouchableOpacity>
            </View>

            {loading ? <Text style={{ textAlign: "center", flex: 1, marginTop: 30 }}>Loading..</Text> : null
            }
            <FlatList data={data}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.price}> Price:₹ {item.price}</Text>
                    </View>
                )}

            />
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({

    card: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 5,
        elevation: 2,
        width: '40%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000'
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold',
    },
    image: {
        width: 150,
        height: 150,
        alignItems: 'center',
        // textAlign: 'center'
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#000'
    },
    logout: {
        width: 100,
        marginRight: 25,

    },
    header: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, logoutbtn: {
        width: 100,
        textAlign: 'center',
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'skyblue',


    }
});
