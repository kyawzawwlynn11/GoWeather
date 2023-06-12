import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const LocationError = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/confused.png')} style={{width:Dimensions.get('window').width*0.9, height:Dimensions.get('window').height*0.5,marginVertical:10}} />
      <View >
      <Text >Hmm... it looks like the location you have entered is </Text>
      <Text>unavailable or there is a typo in your search.</Text>
      </View>
      <CustomButton width={100} title={'Retry'} backgroundColor={'#393E46'} color={'white'} borderRadius={10}  height={40}/>
    </View>
  )
}

export default LocationError

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        gap:30
    
    }
})