import { StyleSheet, Text, View, Button,Dimensions,ScrollView } from 'react-native'
import React from 'react'
import { useContext, useRef, useState } from 'react'
import { Context } from '../App'
import { Video, ResizeMode } from 'expo-av'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import AboutScreenHeader from '../components/AboutScreenHeader'
import { useFonts } from 'expo-font'



const About = ({navigation}) => {


  const data = useContext(Context)
  const video = useRef(null)
  const [status, setStatus] = React.useState({});

  const iconPresshandler = () => {
    navigation.toggleDrawer()



   }


  return (
    <View style={styles.container}>
      <AboutScreenHeader iconPresshandler={iconPresshandler}/>
        <View style={styles.description}>
          <View style={{height: '30%', justifyContent: 'center'}}>
          <Text style={{fontSize: 20 , fontWeight: 500,fontFamily: 'Ledger'}}>Description</Text>
          </View>
          <View style={{height: '70%', justifyContent: 'center',marginVertical:5}}>
          <Text style={{fontFamily: 'Ledger'}}>This app provides users with current weather conditions and every 3 hours forecast for 5 days all over the world.</Text>
          </View>
        </View>


        <View style={styles.features}>
          <View style={{marginVertical: 10,width:'95%', alignSelf:'center'}}>
        <Text style={{fontSize: 20, fontWeight: 500,fontFamily:'Ledger'}}>Features</Text>
        </View>
          <View style={styles.featureView}>
              <View style={styles.featureTitleView}>
                <Text style={{fontSize:16,fontFamily:'Ledger' }}>Dynamic Themes</Text>
              </View>
              <View style={{width: '95%', alignSelf: 'center', height: '80%'}}>
                <Text style={{fontFamily:'Ledger', fontSize: 12.5}}>This app uses dynamic themes that change according to the weather condition of the location. Additionally, it also has dynamic theming features that change according to the local time of a location.</Text>
              </View>
          </View>
          <View style={styles.featureView}>
              <View style={styles.featureTitleView}>
                <Text style={{fontSize:16, fontFamily:'Ledger'}}>Current Weather </Text>
              </View>
              <View style={{width: '95%', alignSelf: 'center', height: '80%'}}>
                <Text style={{fontFamily:"Ledger"}}>Current weather conditions can be accessed from all over the world including temperatures, weather conditions and other details. </Text>
              </View>
          </View>
          <View style={styles.featureView}>
              <View style={styles.featureTitleView}>
                <Text style={{fontSize:16,fontFamily:'Ledger'}}>5-day forecast</Text>
              </View>
              <View style={{width: '95%', alignSelf: 'center', height: '80%'}}>
                <Text style={{fontFamily:'Ledger'}}>Provides 3-hour forecast for 5 days. Weather statistics are provided along with a graph and appropriate icons for each 3-hour period.</Text>
              </View>
          </View>
          <View style={styles.featureView}>
              <View style={styles.featureTitleView}>
                <Text style={{fontSize:16,fontFamily:'Ledger'}}>Changing Locations</Text>
              </View>
              <View style={{width: '95%', alignSelf: 'center', height: '80%'}}>
                <Text style={{fontFamily:'Ledger'}}>This app allows users to change different locations and provide the changed location's current weather condition and forecast data.</Text>
              </View>
          </View>
        </View>
        <View style={styles.VersionView}>
        <Text style={{fontFamily:"Ledger",fontSize: 12}}>Version - 1.0.0</Text>
        </View>
        
      
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  description: {
    marginVertical: 10,
    width: Dimensions.get('window').width-50,
  // backgroundColor: 'red',
    height: '15%',
    alignSelf: 'center',
  
  },
  features: {
  width: Dimensions.get('window').width-30,
  height: '70%',
  alignSelf: 'center',
  //backgroundColor: 'cyan'
  },
  featureView: {
   
   height: '25%',
   width: '100%',
   //backgroundColor: 'white',
    
  },
  featureTitleView:{
    width: '95%',
    height: '30%',
    //backgroundColor:'red',
    alignSelf:'center'
  },
  VersionView:{
    width:Dimensions.get('window').width-30,
    height: '8%',
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor: 'red',
    alignSelf:'center'
  }
})




