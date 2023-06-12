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


const About = ({navigation}) => {
  const data = useContext(Context)
  const video = useRef(null)
  const [status, setStatus] = React.useState({});

  const iconPresshandler = () => {
    navigation.toggleDrawer()



   }
  return (
    <ScrollView style={styles.container}>
      <AboutScreenHeader iconPresshandler={iconPresshandler}/>
        <View style={styles.description}>
          <View style={{height: '30%', justifyContent: 'center'}}>
          <Text style={{fontSize: 20 , fontWeight: 'bold'}}>Description</Text>
          </View>
          <View style={{height: '70%', justifyContent: 'center'}}>
          <Text>This app provides users with current weather conditions and every 3 hours forecast for 5 days all over the world.</Text>
          </View>
        </View>


        <View style={styles.features}>
          <View style={{marginVertical: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Features</Text>
        </View>
          <View style={styles.featureView}>
              <View style={styles.featureTitleView}>
                <Text style={{fontSize:16, }}>-Dynamic Themes</Text>
              </View>
              <View style={{width: '95%', alignSelf: 'center', height: '80%'}}>
                <Text>This app uses dynamic themes according to the weather condition of the location. Additionally, it also has dynamic theming features according to the local time of the location.</Text>
              </View>
          </View>
          <View style={styles.featureView}>
              <View style={styles.featureTitleView}>
                <Text style={{fontSize:16}}>-Current Weather </Text>
              </View>
              <View style={{width: '95%', alignSelf: 'center', height: '80%'}}>
                <Text>Current weather conditions can be accessed from all over the world. </Text>
              </View>
          </View>
          <View style={styles.featureView}>
              <View style={styles.featureTitleView}>
                <Text style={{fontSize:16}}>-5 day forecast</Text>
              </View>
              <View style={{width: '95%', alignSelf: 'center', height: '80%'}}>
                <Text>3 hours forecast is available for 5 days. Weather statistics are provided along with a graph and appropriate icons for each 3-hour period.</Text>
              </View>
          </View>
          <View style={styles.featureView}>
              <View style={styles.featureTitleView}>
                <Text style={{fontSize:16}}>-Changing Locations</Text>
              </View>
              <View style={{width: '95%', alignSelf: 'center', height: '70%'}}>
                <Text>This app allows users to change different locations and provide the changed location's current weather condition and forecast data.</Text>
              </View>
          </View>
        </View>
        
      
    </ScrollView>
  )
}

export default About

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  description: {
    marginVertical: 10,
    width: Dimensions.get('window').width-30,
   // backgroundColor: 'red',
    height: Dimensions.get('window').height*0.1,
    alignSelf: 'center'
  },
  features: {
  width: Dimensions.get('window').width-30,
  height: Dimensions.get('window').height*0.7,
  alignSelf: 'center',
  //backgroundColor: 'cyan'
  },
  featureView: {
   
   height: '25%',
   width: '100%',
   //backgroundColor: 'white',
    
  },
  featureTitleView:{
    width: '100%',
    height: '30%'
  }
})




