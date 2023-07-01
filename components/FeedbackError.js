import { Dimensions, StyleSheet, Text, View, Image, StatusBar, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


const FeedbackError = ({pressHandler}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress= {pressHandler} style={{ position: 'absolute',top:5, right: 5,alignSelf:'flex-end'}}>
         <AntDesign name="closecircle" size={24} color="#393E46"  />
         </TouchableOpacity>
      <View style={styles.wrapper}>
        <View style={styles.imageView}>
       
           <Image 
           source={require('../assets/feedbackerror.png')}
           style={{
            width: '100%',
            height: '100%'
           }}
           />
        </View>
        <View style={styles.textView}>
            <Text style={{fontSize:20, fontFamily: 'Domine-Bold', color:'#393E46'}}>An Error Occured!</Text>
        </View>
      </View>
      <StatusBar />
    </View>
  )
}

export default FeedbackError

const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
},
wrapper: {
    flex: 0.5,
    //backgroundColor:'red',
    width: Dimensions.get('window').width-40
},
imageView: {
    flex:0.7
},
textView: {
    flex: 0.3,
    justifyContent:'center',
    alignItems:'center'
}
})