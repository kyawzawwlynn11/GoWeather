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

export const Context = React.createContext();
export const ThemeContext = React.createContext();

export default function App() {
  const [loading,setLoading] = useState(true)
  const [data, setData] =  useState({})
  const [imgSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchdata =  () => {
    
        const apikey = '795a1cddd32720de41ea778679b40c73'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Mawlamyine&appid=795a1cddd32720de41ea778679b40c73`
        fetch(url).then(response => response.json()).then((res) => {
         //console.log(res)
         setData(res)
         
         setLoading(false)
         console.log(data)
         //console.log(weather)
          
         
        
        }).catch(err => {
         console.log(err)
        })
        
 
 
     } 
     
   fetchdata()
   
   //console.log(data.wind.speed)
   
   
 },[])

  const Drawer = createDrawerNavigator()
  return (

    loading?
    <Loading/>
    :
    <Context.Provider value={data}>
    <NavigationContainer>
       <Drawer.Navigator initialRouteName='MainScreen' drawerContent={props => <Sidemenu {...props} />} >
        <Drawer.Screen name='Home' component={MainScreen} />
        <Drawer.Screen name='About' component={About} />
       </Drawer.Navigator>
    </NavigationContainer>
    </Context.Provider>
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
