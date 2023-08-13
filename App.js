import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Splash from './src/screen/Splash';
import Login from './src/screen/Login';
import HomePage from './src/screen/HomePage';
import { StatusBar, Button } from 'react-native';
import Sigin from './src/screen/Sigin';
import Home from './src/screen/Home';
import NetInfo from "@react-native-community/netinfo";
import NetworkHandler from './src/screen/NetworkHandler';

const Stack = createStackNavigator();

const App = () => {
  const [connectionType, setConnectionType] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const fetchNetworkState = async () => {
      const state = await NetInfo.fetch();
      setConnectionType(state.type);
      setIsConnected(state.isConnected);
    };

    const unsubscribe = NetInfo.addEventListener(state => {
      setConnectionType(state.type);
      setIsConnected(state.isConnected);
    });

    fetchNetworkState();

    return () => {
      unsubscribe();
    };
  }, []);

  

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="black" />
        {isConnected ? (
          <Stack.Navigator>
            <Stack.Screen name='splash' options={{ headerShown: false }} component={Splash} />
            <Stack.Screen name='Login' options={{ headerShown: false }} component={Sigin} />
            <Stack.Screen name='Home' options={{ headerShown: false }} component={Home} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name='NetworkHandler'
              options={{ headerShown: false }}
              component={NetworkHandler}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </Provider>
  );
}

export default App;
