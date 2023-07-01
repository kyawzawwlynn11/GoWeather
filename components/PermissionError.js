import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React from 'react'

const PermissionError = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper} >
          <View style={styles.imageView}>
            <Image 
              source={require('../assets/permissionerror.png')}
              style={{
                height:'100%',
                width:Dimensions.get('window').width-50,
              }}
            />
          </View>
          <View style={styles.titleView}>
            <Text style={{fontSize:22, fontFamily:'Domine-Bold'}}>Location Access Denied</Text>
          </View>
          <View style={styles.textView}>
             <Text style={{fontSize:14, fontFamily:'Domine-Medium'}}>This app uses the device's location to provide users with weather information based on their current location. Please restart the application or manually give location access in your device settings.</Text>
          </View>
      </View>
    </View>
  )
}

export default PermissionError

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f1f2f6',
        justifyContent:'center',
        alignItems: 'center'
    },
    wrapper: {
        flex: 0.7,
        width: Dimensions.get('window').width-50,
        //backgroundColor:'red',
        justifyContent:'space-around',
        alignItems:'center',
    },
    imageView: {
        flex: 0.5
    },
    titleView: {
        flex: 0.1,
       // backgroundColor: 'blue',
        justifyContent:'center',

    },
    textView: {
        flex: 0.4,
        //backgroundColor: 'green'
    }
 
})