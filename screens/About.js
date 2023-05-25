import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { Context } from '../App'
import { Video, ResizeMode } from 'expo-av'


const About = () => {
  const data = useContext(Context)
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video 
      useNativeControls={false}
      source={require('../assets/raining.mp4')}
      resizeMode={ResizeMode.COVER}
      style={{flex:1}}
      isLooping
      onPlaybackStatusUpdate={status => setStatus(() => status)}
      shouldPlay={true}
      />
      <Text>Hi</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})