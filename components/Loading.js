import { ActivityIndicator, StyleSheet, Text, View, Animated, ImageBackground} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { themes } from '../constants/colors'
import AnimatedLottieView from 'lottie-react-native'



const Loading = () => {
    
    
    const [toggle,setToggle] = useState(false)

  return (
    <ImageBackground  source={require('../assets/loadingbg.png')} style={styles.container}>
        <AnimatedLottieView 
        source={require('../assets/loading.json')}
        autoPlay
        style={{width:250, height: 250}}
        />
        
        
    </ImageBackground>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    icon:{
      backgroundColor: 'white',
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 130
    }
})