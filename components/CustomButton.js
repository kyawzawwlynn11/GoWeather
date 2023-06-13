import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const CustomButton = ({navigation,width,title,backgroundColor, color, borderRadius, onPress,value,goBackHandler,height}) => {

  const [fontsLoaded] = useFonts ({
    'Ledger': require('../assets/fonts/Ledger-Regular.ttf')
  })

  if (!fontsLoaded){
    return null
  }
  return (
    <TouchableOpacity onPress={() => {onPress(value); goBackHandler();}} style={[styles.container, {width:width,backgroundColor:backgroundColor,borderRadius:borderRadius,height}]}>
      <Text style={{color:color,fontSize:14,fontFamily: 'Ledger'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        
             
    }
})