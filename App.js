import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './screens/About';

import MainScreen from './screens/MainScreen';
import Loading from './components/Loading';
import Sidemenu from './screens/Sidemenu';
import { themes } from './constants/colors';


export default function App() {
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
       <Drawer.Navigator initialRouteName='MainScreen' drawerContent={props => <Sidemenu {...props} />} >
        <Drawer.Screen name='Home' component={MainScreen}/>
        <Drawer.Screen name='About' component={About} />
       
       
       </Drawer.Navigator>
    </NavigationContainer>
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
