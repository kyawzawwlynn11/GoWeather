import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { themes } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

const InfoCard = ({icon, property, title, color}) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={{color: color, fontWeight: 'bold', fontSize: 20}}>{property}</Text>
      <Text style={{color: color, fontSize: 16}}>{title}</Text>
    </View>
  )
}

export default InfoCard

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '30%',
        backgroundColor: 'black',
        marginHorizontal: 5,
        justifyContent:'center',
        alignItems: 'center'
    }
})