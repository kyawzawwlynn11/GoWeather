import { StyleSheet, Text, View, Image, FlatList, ImageBackground, Pressable } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { themes } from '../constants/colors';
import { Dimensions } from 'react-native';
import { Context } from './DrawerStacks';
import { Video, ResizeMode } from 'expo-av';
import moment from 'moment';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const Sidemenu = ({navigation}) => {

const [imageUri, setImageUri] = useState('')
const data = useContext(Context);
contentsList = [
  {title:"Home", icon: <Ionicons name="home-outline" size={24} color="#faf9f6" />,key : 1},
  {title:"Change Location", icon: <Ionicons name="location-outline" size={24} color="#faf9f6" />,key : 2},
  {title:"Share your friends", icon: <Entypo name="share" size={24} color="#faf9f6" />,key : 3},
  {title:"Feedback", icon: <Octicons name="report" size={24} color="#faf9f6" />,key : 4},
  {title:"About", icon: <AntDesign name="questioncircleo" size={24} color="#faf9f6" />,key : 5}
  
];

useEffect(() => {
  fetchImage()
})

const fetchImage = () => {
  const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  fetch(url).then(response => {
    console.log(response.url)
    setImageUri(response.url)
  })
}


  const [selectedId, setSelectedId] = useState(null);

  const pressHandler = (id,title) => {
       navigation.navigate(title)
       console.log(selectedId)
       setSelectedId(id)
  }


  return (
    <View style = {[
      styles.container,
      // data.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy},
      // data.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},
      // data.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
    ]}
    >
 
      <ImageBackground source={require('../assets/citylandscape.png')} style={styles.firstSection}>
    
         <View style={styles.imageContainer}>
          <Image  source={{uri: imageUri}} style={{width:100,height:100, borderRadius: 20, borderWidth: 0, borderColor: '#faf9f6'}}/>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#faf9f6'}}>{data.weather[0].description}</Text>      
         </View>
         <View style={styles.textContainer}>
            <Text style={{fontSize: 20, fontWeight: 'bold',color: '#faf9f6'}}>{data.name},{data.sys.country}</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#faf9f6'}}>{Math.round(data.main.temp - 273.15)}°C</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#faf9f6'}}>{ moment().utcOffset(data.timezone/60).format('hh:mm a')}</Text>
         </View>
      </ImageBackground>
      <View style={styles.secondSection}>
         <FlatList 
          data={contentsList}
          renderItem = {({item}) => {

            return (
               <View style={styles.secondSectionContents}>
                <Pressable onPress={()=> pressHandler(item.key,item.title)} style={[{flexDirection: 'row', width: '70%', height: '100%', alignItems: 'center', alignSelf: 'center',gap:20}]}>
                   {item.icon}
                   <Text style={{color: '#faf9f6'}}>{item.title}</Text>
                </Pressable>
               </View>
            )
        }}
         />
      </View>
    </View>
  )
}

export default Sidemenu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42465f'
    
  },

  firstSection: {
    
     height: height*0.3,
     flexDirection:'row',
     borderBottomWidth:0.5
     
  },
  imageContainer:{
     width: '50%',
     
     height: '100%',
     alignItems:'center',
     justifyContent:'center'
  },
  textContainer:{
     width: '50%',
   
     height: '100%',
     justifyContent:'center',
     alignItems:'center'
  },
  secondSection: {
    backgroundColor: themes,
    height: height*0.7

  },
  secondSectionContents: {
    width:'100%', 
    height: 80, 
   
    backgroundColor: '#42465f',
    justifyContent: 'center',
    borderRadius: 10, 
    
    
    borderColor: 'black', 
    marginVertical: 1,
    alignSelf: 'center',
    
  }

})