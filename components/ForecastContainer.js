import { StyleSheet, Text, View,Dimensions, ImageBackground, ScrollView, Pressable, Image} from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { FlatList } from 'react-native-gesture-handler';




const ForecastContainer = ({text,data}) => {

  const iconList = {
    clouds: <Ionicons name="cloudy-outline" size={27} color="black" />,
    rain: <Ionicons name="rainy-outline" size={27} color="black" />,
    thunderStorm: <Ionicons name="thunderstorm-outline" size={27} color="black" />,
    sunny: <Ionicons name="sunny-outline" size={27} color="black" />
  }

 
  // const getAverageTemp = (arr) => {
  //      let total  = 0;
  //      for(let i = 0; i < arr.length; i++ ) {
  //           total += arr[i].main.temp;
  //      }

  //      return (total/arr.length -273.15).toFixed();
  // }

  // const getMaxTemp = (arr) => {
  //  let list = []
  //  for(let i = 0; i < arr.length; i++){
  //   list.push(arr[i].main.temp_max)
  //  }

  //  list = list.sort();
  //  //console.log("Max")
  //  //console.log(list)
  //   return (list[list.length-1] - 273.15).toFixed()
  // }

  // const getMinTemp = (arr) => {
  //   let list = []
  //   for(let i = 0; i < arr.length; i++){
  //    list.push(arr[i].main.temp_min)
  //   }
 
  //   list = list.sort();
  //  // console.log("Min")
  //   //console.log(list)
  //    return (list[0] - 273.15).toFixed() - 2
  // }

//   const getWeatherInfo = (arr) => {
//     let list = []
//     let clear = 0;
//     let rain = 0;
//     let clouds = 0;
//     for (let i = 0; i < arr.length; i++ ){
//       list.push(arr[i].weather[0].main)
//     }
//     console.log(list)

//     for(let i = 0; i < list.length; i++){
//       if(list[i] === 'Rain') {
//         rain++
//       } else if (list[i] === 'Clear') {
//       clear++
//     } else if (list[i] === 'Clouds') {
//       clouds++
//     }

//   }

//   if(clear > rain || clear > clouds) {
//     return iconList.clear
//   } else if (rain > clear || rain > clouds) {
//     return iconList.rain
//   } else if (clouds > clear || clouds > rain) {
//    return iconList.clouds
//   }
// }
// let morningList = []
// let afternoonList = []
// let nightList = []


   

//function for adding each weather to morning and afternoon and night
// const getWeatherInfo = (arr) => {

 
  
//       for (let i = 0; i < arr.length; i++){
//         if(moment.unix(arr[i].dt).format('a') === 'am'){
//           morningList.push({weather :arr[i].weather[0].main, temp: arr[i].main.temp});
         
//         } else if (moment.unix(arr[i].dt).format('H') === '18' || moment.unix(arr[i].dt).format('H') === '21') {
//           nightList.push({weather :arr[i].weather[0].main, temp: arr[i].main.temp})
//         }  else if (moment.unix(arr[i].dt).format('H') === '12' || moment.unix(arr[i].dt).format('H') === '15') {
//           afternoonList.push({weather :arr[i].weather[0].main, temp: arr[i].main.temp})
//         }
//       }
//       console.log(morningList)
//       console.log(nightList)
//       console.log(afternoonList)
//}

// useEffect(() => {

//   console.log(data)
// },[])


const getLabels = (arr) => {
  let labels  = []
  for(let i =0; i < arr.length; i++){
    labels.push(moment.unix(arr[i].dt).format('ha'))
  }
  return labels
}

const fetchLabels = (label) => {
     fetch(`https://openweathermap.org/img/wn/${label}@2x.png`)
     .then(response => {
      
      return response
    })
}
const getTemps = (arr) => {
  let temps = []
  for(let i = 0; i < arr.length; i++){
    temps.push((arr[i].main.temp-273.15).toFixed())
  }
  return temps
}

const getIcons = (arr) => {
  let list = [];
  let key = 1;
  for(let i = 0; i < arr.length; i++){
   list.push({key: key, icon: arr[i].weather[0].icon, date: moment.unix(arr[i].dt).format('h a'), title: arr[i].weather[0].description,})
   key++
  
   
  }
  console.log(list)
  return list
 

}




 
  return (
    <View style={styles.container}>
        
      <View style={styles.header}>
       <Text style={{fontSize: 20, fontWeight: 'bold', color: '#393E46'}}>{text}</Text>
      </View>
        <BarChart
    data={{
      labels:  getLabels(data),
      datasets: [
        {
          data: getTemps(data)
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={Dimensions.get('window').height * 0.5}
    yAxisLabel=""
    yAxisSuffix=" C"
    yAxisInterval={3} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#F9F3F3",
      backgroundGradientFrom: "#F9F3F3",
      backgroundGradientTo: "#F9F3F3",
     
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(57, 62, 70, ${opacity})`,
      style: {
        borderRadius: 16,
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#393E46"
      },
    
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      borderWidth: 0,
      marginTop: 20
      
    }}
  />

   <FlatList 
   horizontal
     data={getIcons(data)}
     renderItem={({item}) => {
      return (
        <View style={styles.contents}>
          
          <Image style={{width: 100, height: 90}} source={{uri : `https://openweathermap.org/img/wn/${item.icon}.png`}}/>
          <Text style={{fontSize:13,color: '#393E46' }}>{item.title}</Text>
          <Text style={{fontSize: 15, fontWeight: 500, color: '#393E46' }}>{item.date}</Text>
         
          
        </View>
      )
     }}
   />

     </View>
  )
}

export default ForecastContainer

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.9,
       
       
        backgroundColor: '#F9F3F3',
       
        
      },
     
    header:{
      width: Dimensions.get('window').width-45,
      //backgroundColor: 'green',
      height: Dimensions.get('window').height*0.09,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems:'flex-start'
    },
    contents:{
    
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.3,
    marginHorizontal: 3,
    marginLeft: 12,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    borderColor: '#000000',
    borderRadius: 5,
    }
})