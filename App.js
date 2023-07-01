import 'react-native-gesture-handler';
import { ActivityIndicator, StatusBar } from 'react-native';
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
import * as Location from 'expo-location'
import AsyncStorage from '@react-native-async-storage/async-storage';
import PermissionError from './components/PermissionError';
import FeedBack from './screens/FeedBack';
import FeedbackError from './components/FeedbackError';





let render = 0
export default function App() {

  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [isLocation, setIsLocation] = useState(false)
  const [permissionError, setPermissionError] = useState(null)



  const [fontsLoaded] = useFonts({
    'Ledger': require('./assets/fonts/Ledger-Regular.ttf'),
    'Domine': require('./assets/fonts/Domine-Regular.ttf'),
    'Domine-Bold' : require('./assets/fonts/Domine-Bold.ttf'),
    'Domine-Medium': require('./assets/fonts/Domine-Medium.ttf'),
    'Domine-Semibold': require('./assets/fonts/Domine-SemiBold.ttf'),
  

  })

  useEffect(() => {
     
  
    //Getting permission
   const getPermissionAsync = async() => {
       let {status} = await Location.requestForegroundPermissionsAsync()
       console.log(status)
       if(status === 'granted') {

        try{

          setPermissionError(false)
          let currentLocation = await Location.getCurrentPositionAsync({});
          //console.log(currentLocation.coords.latitude)

          setLat(currentLocation.coords.latitude.toString())
          setLon(currentLocation.coords.longitude.toString())
          if(lon !== null && lat !== null && lat !== '' && lon !== ''){
            await AsyncStorage.setItem('lat', lat)
            await AsyncStorage.setItem('lon',  lon)
            setIsLocation(true)
          }
         
          //console.log(currentLocation)
          //console.log(AsyncStorage.getItem('geolocation'))

        }catch(e){
         console.log("Error on getting the location")
         console.log(e)
        }
        
          
       }

       if(status === 'denied') {
       setPermissionError(true)
       }
   } 
       







//function calls

   getPermissionAsync()
   
   // setCoordinates()

  // console.log(curLocation)
  

   
  },[lat,lon,permissionError,isLocation])

  if(!fontsLoaded){
    return null
  }

  render++
  console.log('App.js rendered :' + render+ 'Times')



if(permissionError) {
  return <PermissionError />

}

if(isLocation && !permissionError) {
  return <DrawerStacks />
}


return <Loading />



}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.sunny,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
