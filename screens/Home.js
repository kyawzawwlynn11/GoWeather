import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from './MainScreen';
import ForecastScreen from './ForecastScreen';

const Home = () => {
    const Stack = createStackNavigator();

  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen component={MainScreen} name='Main Screen'/>
        <Stack.Screen component={ForecastScreen} name='Forecast Screen'/>
    </Stack.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})