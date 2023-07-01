import { StyleSheet, Text, View,Image, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import { AntDesign } from '@expo/vector-icons';

const LocationError = ({navigation}) => {

  const pressHandler=() => {
    navigation.navigate('Change Location');
  }
  return (
    <View style={styles.container}>
       
        <TouchableOpacity style={{ position: 'absolute',top:5, right: 5,alignSelf:'flex-end'}}>
         <AntDesign name="closecircle" size={24} color="#393E46"  />
         </TouchableOpacity>
      <View style={styles.wrapper}>
        <View style={styles.imageView}>
       
           <Image 
           source={require('../assets/confused.png')}
           style={{
            width: '100%',
            height: '100%'
           }}
           />
        </View>
        <View style={styles.textView}>
          
            <Text style={{fontFamily: 'Domine', lineHeight: 20}}>Hmm...It looks like the location you are searching for is not available or there is a typo in your search</Text>
        </View>
        <View style={{flex: 0.1, backgroundColor: 'red', justifyContent:'center', alignItems:'center'}}>
        <CustomButton width={'30%'} title={'Retry'} backgroundColor={'#393E46'} color={'white'} borderRadius={10}  height={'70%'} onPress={pressHandler} goBackHandler={() => console.log('Go back handler not in action')}/>
        </View>
      </View>
      <StatusBar />
 
      
    </View>
  )
}

export default LocationError

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
},
wrapper: {
    flex: 0.7,
    //backgroundColor:'red',
    width: Dimensions.get('window').width-40
},
imageView: {
    flex:0.7
},
textView: {
    flex: 0.2,
    justifyContent:'center',
    alignItems:'center',width: '85%', //backgroundColor:'red',
    alignSelf:'center',
    
}
})
//