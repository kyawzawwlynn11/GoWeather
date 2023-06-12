import { StyleSheet, Text, View,Pressable, Touchable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LocationTag = ({text,pressHandler,goBackHandler}) => {
  return (
    <TouchableOpacity onPress={() => {pressHandler(text); goBackHandler() }} style={styles.container}>
        <Ionicons name="location-outline" size={20} color="#393E46" />
      <Text style={{fontSize:15, color:"#393E46"}}>{text}</Text>
      <Pressable>
    
      </Pressable>
    </TouchableOpacity>
  )
}

export default LocationTag

const styles = StyleSheet.create({
  container:{
    height: 32,
    width:110,
    //backgroundColor:'white',
    marginVertical:10,
    marginHorizontal:7,
    flexDirection:'row',
    borderRadius:13,
    alignItems:'center',
    justifyContent:'space-around',
    gap:10,
    borderWidth:1,
    borderColor:'#393E46',
    
   
  }
})