import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from './MainScreen';
import ForecastScreen from './ForecastScreen';
import LocationError from '../components/LocationError';
import { LocationContext } from '../constants/Context';

const Home = () => {
    const Stack = createStackNavigator();
  
  return (
    <Stack.Navigator initialRouteName= 'MainScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen component={MainScreen} name='Main Screen'/>
        <Stack.Screen component={ForecastScreen} name='Forecast Screen'/>
        <Stack.Screen component={LocationError} name='Location Error' />
    </Stack.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})