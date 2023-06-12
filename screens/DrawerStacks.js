import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './About';
import MainScreen from './MainScreen';
import Loading from '../components/Loading';
import Sidemenu from './Sidemenu';
import { LocationContext } from '../constants/LocationContext';
import { useState, useEffect } from 'react';
import React from 'react';
import Home from './Home';
import ChangeLocation from './ChangeLocation';
import LocationError from '../components/LocationError';

export const Context = React.createContext();
export const ThemeContext = React.createContext();

export default function DrawerStacks({navigation}) {
  const [loading,setLoading] = useState(true)
  const [data, setData] =  useState({})
  const [location, setLocation] = useState('Yangon')
  const [error, setError] = useState(false)
  

  useEffect(() => {
    const fetchdata =  () => {
    
        const apikey = '795a1cddd32720de41ea778679b40c73'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=795a1cddd32720de41ea778679b40c73`
        fetch(url).then(response => response.json()).then((res) => {
         //console.log(res)
         setData(res)
        
         setLoading(false)
         console.log(data)
         //console.log(weather)
          
         
        
        }).catch(err => {
          setError(true)
          console.log('Error')
        })
        
 
 
     } 
     
   fetchdata()
   
   //console.log(data.wind.speed)
   
   
 },[location])


  //function for setting the state of parent/highest level component

  const pressHandler = (location) => {
    //Resetting the setLoading value so that component doesnt render before the data haas changed to prevent from uninstialized results
       setLoading(true)
       // When Loading, useEffect hook will be called again and fetch new data due to the location dependency, it will then set the loading state to false after fecthing data
       setLocation(location)
       console.log('State set')
       console.log('New state:'+location )

       
  }

  const Drawer = createDrawerNavigator()
  return (

    loading?
    <Loading/>
    :
    <NavigationContainer>
    <Context.Provider value={data}>
      <LocationContext.Provider value={{location: location, setLocation: setLocation, pressHandler: pressHandler}}>
       <Drawer.Navigator initialRouteName='Home' drawerContent={props => <Sidemenu {...props} />}  screenOptions={{headerShown: false}}>
       <Drawer.Screen name='Error' component={LocationError} />
        <Drawer.Screen name='Home' component={Home} /> 
        <Drawer.Screen name='About' component={About} />
        <Drawer.Screen name='Change Location' component={ChangeLocation} />
       </Drawer.Navigator>
       </LocationContext.Provider>
    </Context.Provider>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
  },
});
