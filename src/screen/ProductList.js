import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/action'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const ProductList = () => {
    const list = useSelector(state => state.userReducer.data.Search)
    const dispatch = useDispatch()
    console.log(list)
    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.heading}>Popular</Text>
                </View>

                <View>
                    <Text style={{ color: "#000", backgroundColor: "#00000039", padding: 5, borderRadius: 50, }}>Show more</Text>
                </View>

            </View>
            <FlatList
                horizontal
                style={{ marginLeft: 5 }}
                data={list}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.Poster }} style={styles.image} />
                        <View style={{ flexDirection: 'row', marginLeft: 10, marginVertical: 10, }}>
                            <FontAwesome5
                                name="star"
                                solid
                                size={15} color="#2c7cc1"
                                style={{ paddingRight: 3 }}
                            />
                            <FontAwesome5
                                name="star"
                                solid
                                size={15} color="#2c7cc1"
                                style={{ paddingRight: 3 }}

                            />
                            <FontAwesome5
                                name="star"
                                solid
                                size={15} color="#2c7cc1"
                                style={{ paddingRight: 3 }}

                            />
                            <FontAwesome5
                                name="star"
                                size={15} color="#2c7cc1"
                                style={{ paddingRight: 3 }}

                            />
                            <FontAwesome5
                                name="star"
                                size={15} color="#2c7cc1"
                                style={{ paddingRight: 3 }}

                            />
                        </View>
                        <Text numberOfLines={1} style={styles.title}>{item.Title}</Text>
                    </View>
                )}
            />
            {/* <Text>
                Discover
            </Text> */}
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    body: {
        marginTop: 20,

    },
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10,

    },
    heading: {
        color: "#000",
        fontSize: 25,
        fontWeight: '900',

    }, card: {
        // backgroundColor: '#fff',
        width: 150,
        marginTop: 20,
        flexDirection: 'column',
        height: 300,
        marginRight: 20,
        // borderRadius: 20,
    }, title: {
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000',
        overflow: 'hidden',
        // height: 30,

    },
    image: {
        width: 150,
        height: 200,
        borderRadius: 20,
    }
})