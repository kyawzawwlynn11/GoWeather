import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { themes } from '../constants/colors';

const ForecastCard = ({background}) => {
  return (
    <View style={[styles.container, {backgroundColor: background}] }>
      <Text style={{fontWeight: 'bold', fontSize: 18, color: '#faf9f6'}}>26</Text>
      <Ionicons name="md-partly-sunny-outline" size={24} color="#faf9f6" />
      <Text style={{color: '#faf9f6'}}>21-Jan</Text>
    </View>
  )
}

export default ForecastCard

const styles = StyleSheet.create({
   container:{
    width: '22%',
    height: '80%',
    
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#faf9f6'
    
   }
})