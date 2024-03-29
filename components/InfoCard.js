import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { themes } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const InfoCard = ({icon, property, title, color}) => {

  
  return (
    <View style={[styles.container]}>
      {icon}
      <Text style={{color: color, fontSize: 18, fontFamily:"Domine-Bold"}}>{property}</Text>
      <Text style={{color: color, fontSize: 14, fontFamily: 'Domine'}}>{title}</Text>
    </View>
  )
}

export default InfoCard

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '30%',
        gap: 10,
        marginHorizontal: 5,
        justifyContent:'center',
        alignItems: 'center'
    }
})