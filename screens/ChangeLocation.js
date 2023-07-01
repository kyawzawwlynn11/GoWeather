import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { LocationContext } from '../constants/Context'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import ChangeLocationHeader from '../components/ChangeLocationHeader';
import CustomButton from '../components/CustomButton';
import { cities } from '../constants/citydata';
import LocationTag from '../components/LocationTag';
import { useFonts } from 'expo-font';

const ChangeLocation = ({navigation}) => {

  
   //Registering the highest level component state and its state setter function using useContext hook
   const {location,pressHandler} = useContext(LocationContext);

   const [text,setText] = useState('')
   
   //function passed in as props to handle the go back when Change button is clicked/pressed
   const goBackHandler = () => {
    navigation.navigate('Main Screen')
   }
   //function for toggling the drawer
   const iconPresshandler = () => {
    navigation.toggleDrawer()

   

   }

  
  return (
    <View style={styles.container}>
      <ChangeLocationHeader iconPresshandler={iconPresshandler}/>
      <View style={styles.firstSection}>
        <View style={styles.wrapper}>
           <Text style={{fontSize:19, color: '#393E46', fontFamily: 'Domine-Bold'}}>Search your city</Text>
           <View style={styles.searchContainer}>
              <TextInput placeholder='Search' onChangeText={(e) => setText(e)} style={{width: '70%', height:'100%',backgroundColor: 'white', borderRadius: 10, color: '#393E46', paddingLeft:20}}/>
               <CustomButton width={'25%'} title={'Change'} backgroundColor={'#393E46'} color={'white'} borderRadius={10} onPress={pressHandler} value={text} goBackHandler={goBackHandler}/>
          </View>
        </View>
        
      </View>
      <View style={styles.secondSection}>
         <View style={styles.titleContainer}>
              <Text style={{fontSize:19, color:'#393E46', fontFamily:"Domine-Bold"}}>Popular Location Tags</Text>
         </View>
         <View style={styles.contentContainer}>
           {cities.map(city => {
             return (
              <LocationTag pressHandler = {pressHandler} goBackHandler={goBackHandler} text={city}/>
             )
           })}
         </View>
      </View>
      <View style={styles.thirdSection}>
       <View style={styles.textview}>
       <Text style={{fontSize:12, color:'#393E46',fontFamily:"Domine"}}>*Please note that there may be some districts, areas or townships that are not available. We recommend you to try the major cities.</Text>
       </View>
      </View>
     

  
    </View>
  )
}

export default ChangeLocation

const styles = StyleSheet.create({

    container: {
        flex:1,
        //backgroundColor: '#fff',
      
        alignItems: 'center',
        
    },
    firstSection:{
     flex: 0.15,
    //backgroundColor:'red',
     width: '100%',
     alignItems:'center',
     justifyContent:'center',
    },
    wrapper:{
      width: Dimensions.get('window').width -30,
      // backgroundColor:'green',
      height: '75%',
      gap:15
    },
    searchContainer:{
    //backgroundColor:'red',
      width:'100%',
      height:'30%',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    secondSection: {
      flex:0.65,
     // backgroundColor:'green',
      width:'100%',
      alignItems:'center'
    },
    titleContainer: {
        flex:0.07,
        width: Dimensions.get("window").width - 30,
        //backgroundColor:'grey'
    },
    contentContainer: {
      flex: 0.93,
      width: Dimensions.get("window").width -30,
     //backgroundColor: 'red',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent: 'space-around',
      overflow:'hidden'
    },
    thirdSection:{
      flex:0.145,
      //backgroundColor:'blue',
      width:'100%',
      justifyContent:'center',
      alignItems:'center'

    },
    textview: {
      width: Dimensions.get("window").width - 30,
    }
    
})