import { StyleSheet, Text, View,Modal,Dimensions, Touchable, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import InfoCard from './InfoCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const InfoModal = ({data, visible, setVisible}) => {
  
  return (
    <Modal transparent visible={visible} animationType='fade'>
    <View style={styles.modalBackground}>

      <View style={styles.modalContainer}>
         <Pressable style={styles.header} onPress={() => setVisible(false)}> 
           <Text style={{color: 'white', fontSize: 25}}>Details</Text>
         </Pressable>
         <View style={styles.contentContainer}>
           <View style={styles.contentRows}>
              <InfoCard title={'Feels like'} property ={Math.round(data.main.feels_like -273.15)+'°'} color={'white'} icon= { <MaterialCommunityIcons name="water-outline" size={40} color={'white'}/>}/>
              <InfoCard title={'Max'} property={Math.round(data.main.temp_max - 273.15)+'°'} color={'white'} icon= { <MaterialCommunityIcons name="water-outline" size={40} color={'white'}/>}/>
              <InfoCard title={'Min'} property={Math.round(data.main.temp_min - 273.15)+'°'} color={'white'} icon= { <MaterialCommunityIcons name="water-outline" size={40} color={'white'}/>}/>
           </View>
           <View style={styles.contentRows}>
           <InfoCard title={'Pressure'} property={data.main.pressure} color={'white'} icon= { <MaterialCommunityIcons name="water-outline" size={40} color={'white'}/>}/>
            <InfoCard title={'Sea level pressure'} property={30} color={'white'} icon= { <MaterialCommunityIcons name="water-outline" size={40} color={'white'}/>} />
            <InfoCard title={'Ground level pressure'} property={40} color={'white'} icon= { <MaterialCommunityIcons name="water-outline" size={40} color={'white'}/>}/>
            
            
           </View>
           <View style={styles.contentRows}>
              <InfoCard title={'Sunrise'} property={123} color={'white'} icon= { <MaterialCommunityIcons name="water-outline" size={40} color={'white'}/>}/>
              <InfoCard title={'Sunrise'} property={123} color={'white'} icon= { <MaterialCommunityIcons name="water-outline" size={40} color={'white'}/>}/>
              <InfoCard title={'Sunset'} property={123} color={'white'} icon= { <MaterialCommunityIcons name="water-outline" size={40} color={'white'}/>}/>
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
       backgroundColor: 'black',
       opacity: 0.9,
       width: width * 0.9,
       height: height * 0.8
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