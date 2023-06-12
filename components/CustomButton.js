import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = ({navigation,width,title,backgroundColor, color, borderRadius, onPress,value,goBackHandler,height}) => {
  return (
    <TouchableOpacity onPress={() => {onPress(value); goBackHandler();}} style={[styles.container, {width:width,backgroundColor:backgroundColor,borderRadius:borderRadius,height}]}>
      <Text style={{color:color,fontSize:18}}>{title}</Text>
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