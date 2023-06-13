import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const ForcastScreenHeader = ({pressHandler}) => {
    
  return (
    <View style={styles.container}>
     <View style={styles.leftSection}>
        <Pressable style={styles.iconView} onPress={pressHandler}>
        <AntDesign name="leftcircleo" size={24} color="#F9F3F3" />
        </Pressable>
     </View>
     <View style={styles.middleSection}>
      <Text style={{color:'#F9F3F3', fontSize: 18, fontFamily: 'Domine-Bold'}}>5-day forcast</Text>
    </View>
    <View style={styles.rightSection}>

    </View>
 </View>
  )
}

export default ForcastScreenHeader

const styles = StyleSheet.create({

    container:{
        width: '100%',
       height: Dimensions.get('window').height* 0.055,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#393e46',
        flexDirection: 'row'
    },
    leftSection:{
        height: '100%',
        width: '33.3%',
        //backgroundColor:'blue'
        
    },
    iconView:{
      height: '100%',
      width: '60%',
      //backgroundColor: 'red',
      justifyContent: 'center',
      marginLeft: 10
    },
   
    middleSection:{
        height: '100%',
        width: '33.3%',
        //backgroundColor:'violet',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightSection:{
        height: '100%',
        width: '33.3%',
        //backgroundColor:'white'
    }
})