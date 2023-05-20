import { ActivityIndicator, Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { themes } from '../constants/colors'
import InfoCard from '../components/InfoCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import ForecastCard from '../components/ForecastCard';
import Loading from '../components/Loading';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
var weather = 'sunny';



const MainScreen = ({navigation}) => {



    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [condition, setCondition] = useState(null);
    const [humidity, setHumidity] = useState(0); 
    const [wind, setWind] = useState(null);
    const [visibility, setVisibility] = useState(0);
    const [temp, setTemp] =  useState(null); //Default: Kelvin Scale
    const [city, setCity] = useState(null);

    useEffect(() => {
        const fetchdata =  () => {
        
            const apikey = '795a1cddd32720de41ea778679b40c73'
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Pathein&appid=795a1cddd32720de41ea778679b40c73`
            fetch(url).then(response => response.json()).then((res) => {
             //console.log(res)
             setData(res)
             //setWeatherCondition(data.weather[0].main)
             setLoading(false)
             console.log(data)
             console.log(weather)
              
             
            
            }).catch(err => {
             console.log(err)
            })
            
     
     
         } 
         
       fetchdata()
       
       //console.log(data.wind.speed)
       
       
     },[])
   
     


    
   
        
       
            
       
    

    const setWeatherCondition = (cond) => {
        if(cond === 'Clear'){
            weather = 'rain'
        }
    }
    

    
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: data.length === 0 ? 'Loading' : data.name,
            headerStyle: {
                backgroundColor: weather === 'rain' ? themes.rain : weather === 'sunny' ? themes.sunny : themes.cloudy,
                
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                marginLeft: width/4
              },
              headerShown: loading ? false : true
          });

          
    },[data.name, loading])

    const contents = {
        theme:{
          wind: {
            icon: <MaterialCommunityIcons name="waves" size={40} color={weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny} />,
            color: weather === 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
            property:  data.length === 0 ? 'Loading' : data.wind.speed.toFixed(1) + ' km/h',
            title: "Wind"
          } ,
          humidity: {
            icon: <MaterialCommunityIcons name="water-outline" size={40} color={weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny} />,
            color: weather === 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
            property: data.length === 0 ?'Loading' : data.main.humidity +'%' ,
            title: "Humidity"
          },
          visibility: {
            icon: <Ionicons name="md-eye-outline" size={40} color={weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny} />,
            color: weather === 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
            property:data.length === 0 ? 'Loading' :  data.visibility/1000 +" km" ,
            title: "Visibility"
          } 
        }
    }
  return (
    !loading ? 
    <View style={styles.container}>
       <View style={styles.firstSection}>
          <View style={styles.wrapper}>
            <View style={styles.date}>
                <Text style={{color: weather === 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny, fontWeight: 'bold'}}>Friday, Jan 22, 2023</Text>
            </View>
            <View style={styles.weather}>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>{weather === 'cloudy' ? 'Cloudy' : weather === 'sunny' ? 'Sunny' : 'Rainy'}</Text>
            </View>
            <View style={styles.temperature}>
                <Text style={[{color: 'black', fontSize: 160, marginLeft: '10%'}, height <= 750 && {fontSize: 130, color: 'black'}]}>
                  {data.length === 0 ? "Loading" : Math.round(data.main.temp-273.15)}°
                </Text>
           </View>
           </View>
       </View>
       <View style={styles.secondSection}>
         <View style={styles.summary}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', marginVertical: 10}}>Daily Summary</Text>
          <Text style={height <= 750 ? {color: 'black', fontSize: 15} : {color: 'black', fontSize: 18}}>Now, it feels like {data.length === 0 ? 'Loading' :  Math.round(data.main.feels_like-273.15)}°, actually  {data.length === 0 ? "Loading" : Math.round(data.main.temp-273.15)}°. The temperature is felt in the range from {data.length === 0 ? 'Loading' :  Math.round(data.main.temp_min-273.15)}° to {data.length === 0 ? 'Loading' :  Math.round(data.main.temp_max-273.15)}°.The current weather condition {data.length === 0 ? "in your city": "in " +  data.name} is best described as '{data.length === 0 ? 'Loading':data.weather[0].description}'.</Text>
          </View>
          <View style={styles.info}>
              <InfoCard icon={contents.theme.wind.icon} property={contents.theme.wind.property} title={contents.theme.wind.title} color ={contents.theme.wind.color}/>
              <InfoCard icon={contents.theme.humidity.icon} property={contents.theme.humidity.property} title={contents.theme.humidity.title} color ={contents.theme.humidity.color}/>
              <InfoCard icon={contents.theme.visibility.icon} property={contents.theme.visibility.property} title={contents.theme.visibility.title} color ={contents.theme.visibility.color}/>
          </View>
        <View style={styles.thirdSection}>
            <View style={styles.forecastTitle}>
             <Text style={{fontSize: 16, fontWeight: 'bold'}}>5-day forecast</Text>
             <FontAwesome name="long-arrow-right" size={30} color="black" />
            </View>
            <View style={styles.forecastContainer}>
                <ForecastCard background ={weather === 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny}/>
                <ForecastCard background ={weather === 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny}/>
                <ForecastCard background ={weather === 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny}/>
                <ForecastCard background ={weather === 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny}/>
            </View>
        </View>
       </View>
       <StatusBar style={{color: themes.sunny}} />
    </View>

    :
    <Loading />
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: weather === 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
        flex: 1,
        width: width
    },
    wrapper:{
        
        backgroundColor: weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
        width: width-10,
        height: '100%',
        
        
        justifyContent: 'center',
        alignItems: 'center'
    },

    firstSection: {
        backgroundColor: weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
        height: "40%",
        width: width,
        alignItems: 'center',
        
    },
    date:{
        backgroundColor: 'black',
        height: 30,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginVertical: 20,
        marginTop: 30
    },
    weather:{
        backgroundColor: weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
        height: 30,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temperature:{
          backgroundColor: weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
          width: width-10,
          justifyContent:'center',
          alignItems: "center",
          height: '70%'
    },
    secondSection:{
        backgroundColor: weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
        height: '40%',
        alignItems: 'center',
    },
    summary:{
        width: width-50,
        backgroundColor: weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
        height: '55%',
        marginBottom: 1,
        
    },
    info: {
        backgroundColor: 'black',
        width: width-50,
        height : '45%',
        borderRadius: 10,
        flexDirection: 'row'
        
    },
    thirdSection:{
        backgroundColor: weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
        height: height <= 750 ? height* 0.25 : height* 0.20,
        width: width-50
    },
    forecastTitle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '20%',
        backgroundColor: weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
        alignItems:'center'
    },
    forecastContainer:{
        flexDirection: 'row',
        height: '80%',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
        
    }

})