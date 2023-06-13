import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const MainScreenHeader = ({name, navigation, iconPresshandler}) => {
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
      <Text style={{color:'white', fontSize: 18, fontFamily: 'Domine-Bold'}}>{name}</Text>
    </View>
    <View style={styles.rightSection}>

    </View>
 </View>
  )
}

export default MainScreenHeader

const styles = StyleSheet.create({
container:{
    width: '100%',
    height: '5.5%',
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor: 'red',
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
  justifyContent: 'space-between',
  marginLeft: 10
},
firstView:{
  width: '80%',
  height: '40%',
  borderBottomWidth: 5,
  borderBottomColor: 'white'
},
secondView:{
  width: '40%',
  height: '40%',
  borderTopWidth: 5,
  borderTopColor: 'white'

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