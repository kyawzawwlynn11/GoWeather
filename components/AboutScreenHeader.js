import { StyleSheet, Text, View,Pressable, Dimensions } from 'react-native'
import React from 'react'

const AboutScreenHeader = ({iconPresshandler}) => {
  return (
    <View style={styles.container}>
    <View style={styles.leftSection}>
       <Pressable style={styles.iconView} onPress={iconPresshandler}>
       <View style={styles.firstView}>
          
          </View>
          <View style={styles.secondView}>

          </View>
       </Pressable>
    </View>
    <View style={styles.middleSection}>
     <Text style={{color:'#F9F3F3', fontSize: 18, fontWeight: 'bold'}}>About</Text>
   </View>
   <View style={styles.rightSection}>
  
   </View>
</View>
  )
}

export default AboutScreenHeader

const styles = StyleSheet.create({
    container:{
        width: '100%',
     height: Dimensions.get('window').height * 0.055,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#393e46',
        flexDirection: 'row'
    },
    leftSection:{
        height: '100%',
        width: '30%',
        //backgroundColor:'blue'

        
    },
    iconView:{
      height: '100%',
      width: '70%',
      //backgroundColor: 'red',
      justifyContent: 'space-between',
      marginLeft: 10,

    },
   
    middleSection:{
        height: '100%',
        width: '40%',
        //backgroundColor:'violet',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightSection:{
        height: '100%',
        width: '30%',
        //backgroundColor:'white'
    },
    firstView:{
      width: '40%',
      height: '40%',
      borderBottomWidth: 5,
      borderBottomColor: 'white'
    },
    secondView:{
      width: '80%',
      height: '40%',
      borderTopWidth: 5,
      borderTopColor: 'white'
    
    },
})