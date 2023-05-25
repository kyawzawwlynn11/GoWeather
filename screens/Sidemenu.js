import { StyleSheet, Text, View, Image, FlatList, ImageBackground } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { themes } from '../constants/colors';
import { Dimensions } from 'react-native';
import { Context } from '../App';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const Sidemenu = ({navigation}) => {

const [imageUri, setImageUri] = useState('')
const data = useContext(Context);
contentsList = [
  {title:"Home", icon: < MaterialCommunityIcons name="human-greeting-variant" size={28} color="black" />,key : 1},
  {title:"Change City", icon: < MaterialCommunityIcons name="human-greeting-variant" size={28} color="black" />,key : 2},
  {title:"About", icon: < MaterialCommunityIcons name="human-greeting-variant" size={28} color="black" />,key : 3}
  
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

  const pressHandler = (key, title) => {
       setSelectedId(key);
       navigation.navigate(title)
       console.log(selectedId)
  }


  return (
    <View style = {[
      styles.container,
      data.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy},
      data.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},
      data.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
    ]}
    >
      <View style={styles.firstSection}>
         <View style={styles.imageContainer}>
          <Image  source={{uri: imageUri}} style={{width:100,height:100, backgroundColor:themes.cloudy, borderRadius: 20, borderWidth: 1, borderColor: 'black'}}/>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>{data.weather[0].description}</Text>      
         </View>
         <View style={styles.textContainer}>
            <Text style={{fontSize: 20, fontWeight: 'bold',}}>{data.name}</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold',}}>{Math.round(data.main.temp - 273.15)}</Text>
         </View>
      </View>
      <View style={styles.secondSection}>
         <FlatList 
          data={contentsList}
          renderItem = {({item}) => {

            return (
               <View style={styles.secondSectionContents}>
                   <Text>{item.title}</Text>
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
    backgroundColor: themes.sunny
  },

  firstSection: {
     backgroundColor: themes.cloudy,
     height: height*0.2,
     flexDirection:'row',
     borderBottomWidth:0.5
     
  },
  imageContainer:{
     width: '50%',
     backgroundColor: themes.cloudy,
     height: '100%',
     alignItems:'center',
     justifyContent:'center'
  },
  textContainer:{
     width: '50%',
     backgroundColor: themes.cloudy,
     height: '100%',
     justifyContent:'center',
     alignItems:'center'
  },
  secondSection: {
    backgroundColor: themes,
    height: height*0.5

  },
  secondSectionContents: {
    width:'95%', 
    height: 80, 
    backgroundColor:themes.cloudy, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10, 
    elevation: 10, 
    borderColor: 'black', 
    marginVertical: 1,
    alignSelf: 'center'
  }

})