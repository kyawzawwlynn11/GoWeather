import { StyleSheet, Text, View,Modal,Dimensions, Touchable, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import InfoCard from './InfoCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import moment from 'moment';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const InfoModal = ({data, visible, setVisible}) => {
  
  return (
    <Modal transparent visible={visible} animationType='fade' onRequestClose={() => setVisible(false)}>
    <View style={styles.modalBackground}>

      <View style={styles.modalContainer}>
         <Pressable style={styles.header} onPress={() => setVisible(false)}> 
           <Text style={{color: 'white', fontSize: 20, fontFamily: 'Domine-Bold'}}>Details</Text>
           <EvilIcons name="close-o" size={28} color="white" style={{position: 'absolute', right: 20}}/>
         </Pressable>
         
         <View style={styles.contentContainer}>
           <View style={styles.contentRows}>
              <InfoCard title={'Feels like'} property ={Math.round(data.main.feels_like -273.15)+'°C'} color={'white'} icon= { <FontAwesome5 name="thermometer-half" size={40} color="white" />}/>
              <InfoCard title={'Min'} property={Math.round(data.main.temp_min - 273.15)+'°C'} color={'white'} icon= { <FontAwesome5 name="thermometer-quarter" size={40} color="white" />}/>
              <InfoCard title={'Max'} property={Math.round(data.main.temp_max - 273.15)+'°C'} color={'white'} icon= { <FontAwesome5 name="thermometer-full" size={40} color="white" />}/>
              
           </View>
           <View style={styles.contentRows}>
           <InfoCard title={'Pressure'} property={data.main.pressure+' mbar'} color={'white'} icon= { <Octicons name="meter" size={30} color={'white'}/>}/>
            <InfoCard title={'Wind'} property={data.wind.speed+ ' km/h'} color={'white'} icon= { <Feather name="wind" size={40} color="white" />} />
            <InfoCard title={'Humidity'} property={data.main.humidity+ " %"} color={'white'} icon= { <MaterialCommunityIcons name="water-outline" size={40} color={'white'}/>}/>
            
            
           </View>
           <View style={styles.contentRows}>
              <InfoCard title={'Sunrise'} property={moment.unix(data.sys.sunrise).format('h:mm a')} color={'white'} icon= { <Feather name="sunrise" size={40} color="white" />}/>
              <InfoCard title={'Sunset'} property={moment.unix(data.sys.sunset).format('h:mm a')} color={'white'} icon= { <Feather name="sunset" size={40} color="white" />}/>
              <InfoCard title={'Cloudiness'} property={data.clouds.all+'%'} color={'white'} icon= { <Ionicons name="cloudy-outline" size={40} color="white" />}/>
           </View>
         </View>
      </View>
    </View>
    </Modal>
  )
}

export default InfoModal

const styles = StyleSheet.create({
    modalBackground:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    modalContainer: {
       
       opacity: 0.8,
       width: width * 0.9,
       height: height * 0.8,
       borderRadius: 10,
       borderWidth:0,
       borderColor: '#faf9f6',
       backgroundColor:'black'
    },
    header: {
      
      flex: 0.08,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'    
    },
    contentContainer: {
      flex: 0.9,
      justifyContent: 'space-around'
     
    },
    contentRows:{
      
      flex: 0.33,
      flexDirection: 'row'
    }
})