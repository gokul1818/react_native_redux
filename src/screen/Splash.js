import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {
  const user = useSelector(state => state.userReducer.user);
  console.log(user, 'dd');



  useEffect(() => {

    setTimeout(() => {
      // const checkUser = async () => {
      try {
        // const userData = await getData('user'); // Retrieve data asynchronously
        if (user?.name === 'Gokul' && user?.password === '1234') {
          navigation.navigate('Home');
        } else {
          navigation.navigate('Login');
        }
      } catch (error) {
        console.log(error);
        navigation.navigate('Login');
      }
      // };

      // checkUser();
    }, 2000);

  }, []);

  // Retrieve data from AsyncStorage
  // const getData = async key => {
  //   try {
  //     const value = await AsyncStorage.getItem(key);
  //     return value ? JSON.parse(value) : null;
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // };

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={"#fff"} />
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={{
          uri: 'https://i.pinimg.com/originals/a4/a7/6e/a4a76e54f28844a0491ff3a2de55a395.jpg',
        }}
      ></ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
  },
});
