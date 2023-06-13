import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './screens/About';

import MainScreen from './screens/MainScreen';
import Loading from './components/Loading';
import Sidemenu from './screens/Sidemenu';
import { themes } from './constants/colors';
import { useState, useEffect } from 'react';
import React from 'react';
import DrawerStacks from './screens/DrawerStacks';
import { useFonts } from 'expo-font';


export const Context = React.createContext();

export default function App() {
  const [loading,setLoading] = useState(true)
  const [data, setData] =  useState({})
  const [imgSrc, setImageSrc] = useState('');
  const [fontsLoaded] = useFonts({
    'Ledger': require('./assets/fonts/Ledger-Regular.ttf'),
    'Domine': require('./assets/fonts/Domine-Regular.ttf'),
    'Domine-Bold' : require('./assets/fonts/Domine-Bold.ttf'),
    'Domine-Medium': require('./assets/fonts/Domine-Medium.ttf'),
    'Domine-Semibold': require('./assets/fonts/Domine-SemiBold.ttf'),
  

  })

  if(!fontsLoaded){
    return null
  }



  return (

  <DrawerStacks />
    

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.sunny,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
