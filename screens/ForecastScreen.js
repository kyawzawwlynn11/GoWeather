import { StyleSheet, Text, View, Dimensions,FlatList, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ForcastScreenHeader from '../components/ForcastScreenHeader';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import moment from 'moment';
import ForecastContainer from '../components/ForecastContainer';
import Paginator from '../components/Paginator';
import Loading from '../components/Loading';


const ForecastScreen = ({navigation, route}) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null)

  const viewableItemsChanged = useRef(({viewableItems}) => {
 setCurrentIndex(viewableItems[0].index)
  }).current;

  const viewconfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

  const goBackHandler = () => {
    navigation.goBack()
  }

  const {forecastData,date,timezone} =  route.params;

  const todayForecastData = [

  ]

  const tomorrowForecastData = [
                           
                              ]

  const thirdDayForecastData = [
                    
  ]

  const fourthDayForecastData = [
                           
  ]

  const fifthDayForecastData = [
                        
]


console.log(forecastData)
// if(moment.unix(forecastData.list[0].dt).format('H') === "21"){
//   console.log(moment.unix(forecastData.list[0].dt).format('dddd H'))
//   //console.log(moment.unix(date).format('dddd H'))
//   todayForecastData.push(forecastData.list[0])
 

// }

for(let i = 0; i < forecastData.list.length ; i++) {
  if(moment.unix(forecastData.list[i].dt).format('D') === moment.unix(date).utc().add(timezone,'s').format('D')){
    todayForecastData.push(forecastData.list[i])
    console.log(todayForecastData)
   // console.log(moment.unix(forecastData.list[i].dt).format('D'))
  } else if (parseInt(moment.unix(forecastData.list[i].dt).format("D")) === parseInt(moment.unix(date).utc().add(timezone,'s').format('D')) + 1){
    tomorrowForecastData.push(forecastData.list[i])
   // console.log(tomorrowForecastData)
  } else if (parseInt(moment.unix(forecastData.list[i].dt).format("D")) === parseInt(moment.unix(date).utc().add(timezone,'s').format('D')) + 2){
    thirdDayForecastData.push(forecastData.list[i])
    //console.log('third day forecast Data' + thirdDayForecastData)
  }else if (parseInt(moment.unix(forecastData.list[i].dt).format("D")) === parseInt(moment.unix(date).utc().add(timezone,'s').format('D')) + 3){
    fourthDayForecastData.push(forecastData.list[i])
  } else if(parseInt(moment.unix(forecastData.list[i].dt).format("D")) === parseInt(moment.unix(date).utc().add(timezone,'s').format('D')) + 4) {
    fifthDayForecastData.push(forecastData.list[i]);
  }
 }


 for (let i = 0; i < todayForecastData.length; i++){
  console.log(moment.unix(todayForecastData[i].dt).format('D:M:yy H'))
 }
 for(let i = 0; i < tomorrowForecastData.length; i++) {
  console.log(moment.unix(tomorrowForecastData[i].dt).format('D:M:yy H'))
 }

 for(let i = 0; i< thirdDayForecastData.length; i++) {
  console.log(moment.unix(thirdDayForecastData[i].dt).format("D:M:yy H"))
}

 for(let i = 0; i < fourthDayForecastData.length; i++){
  console.log(moment.unix(fourthDayForecastData[i].dt).format("D:M:yy H"))
 }
 for(let i = 0; i < fifthDayForecastData.length; i++){
  console.log(moment.unix(fifthDayForecastData[i].dt).format("D:M:yy H"))
 }

 const contents = [
  {id: 1, text: 'Today', data:todayForecastData},
  {id: 2, text: 'Tomorrow', data:tomorrowForecastData},
  {id: 3, text: moment.unix(thirdDayForecastData[0].dt).format('dddd, MMMM Do'), data:thirdDayForecastData},
  {id: 4, text: moment.unix(fourthDayForecastData[0].dt).format('dddd, MMMM Do'), data:fourthDayForecastData},
  {id: 5, text: moment.unix(fifthDayForecastData[0].dt).format('dddd, MMMM Do'), data:fifthDayForecastData}
 ]
 


 

  return (
    <View style={styles.container}>
     <ForcastScreenHeader pressHandler={goBackHandler}/>
 <View style={{flex:0.9, backgroundColor:'red'}}>
    <FlatList
    
    horizontal
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    viewabilityConfig={viewconfig}
    data={contents}
    scrollEventThrottle={32}
    pagingEnabled
    bounces={false}
    onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],{
      useNativeDriver: false
    })}
    
    renderItem={({item}) => {
      return(
        <ForecastContainer text={item.text} data={item.data} key={item.id}/>
      )
    }}
    />
    </View>
  
   
     <Paginator data={contents} scrollX={scrollX}/>

    </View>
  )
}

export default ForecastScreen

const styles = StyleSheet.create({
   container:{
    flex: 1,
   // backgroundColor: 'red'
       
   },
  
  
})



  {/* <BarChart
    data={{
      labels: [
      moment.unix(forecastData.list[0].dt).format('hh:ss'),
      moment.unix(forecastData.list[1].dt).format('hh:ss'),
      moment.unix(forecastData.list[2].dt).format('hh:ss'),
      moment.unix(forecastData.list[3].dt).format('hh:ss'),
      moment.unix(forecastData.list[4].dt).format('hh:ss'),
      moment.unix(forecastData.list[5].dt).format('hh:ss'),
      moment.unix(forecastData.list[6].dt).format('hh:ss'),
      moment.unix(forecastData.list[7].dt).format('hh:ss'),
      moment.unix(forecastData.list[8].dt).format('hh:ss'),

    ],
      datasets: [
        {
          data: [
            forecastData.list[0].main.temp -273.15,
            forecastData.list[1].main.temp -273.15,
            forecastData.list[2].main.temp -273.15,
            forecastData.list[3].main.temp -273.15,
            forecastData.list[5].main.temp -273.15,
            forecastData.list[6].main.temp -273.15,
            forecastData.list[7].main.temp -273.15,
            forecastData.list[8].main.temp -273.15,         
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={Dimensions.get("window").height*0.6}
    yAxisLabel=""
    yAxisSuffix=" C"
    yAxisInterval={3} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    
    style={{
      marginVertical: 8,
      borderRadius: 16,
      
    }}
  /> */}