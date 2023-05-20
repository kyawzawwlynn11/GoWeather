import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, {useState} from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { themes } from '../constants/colors';
import { Dimensions } from 'react-native';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const Sidemenu = ({navigation}) => {

contentsList = [
  {title:"Home", icon: < MaterialCommunityIcons name="human-greeting-variant" size={28} color="black" />,key : 1},
  {title:"About", icon: < MaterialCommunityIcons name="human-greeting-variant" size={28} color="black" />,key : 2}
  
];


  const [selectedId, setSelectedId] = useState(null);

  const pressHandler = (key, title) => {
       setSelectedId(key);
       navigation.navigate(title)
       console.log(selectedId)
  }


  return (
    <View style = {styles.container}>
      <View style={styles.firstSection}>
         
      </View>
      <View style={styles.secondSection}>
         <FlatList 
          data={contentsList}
          renderItem = {({item}) => {

            return (
               <View style={{width:'90%', height: 50, backgroundColor:themes.sunny, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 2, borderColor: 'black', marginVertical: 2,alignSelf: 'center'}}>
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
     backgroundColor: 'red',
     height: height*0.3
  },
  secondSection: {
    backgroundColor: themes,
    height: height*0.5

  }

})