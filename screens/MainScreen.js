import { ActivityIndicator, Dimensions, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View , Pressable} from 'react-native'
import React, { useEffect, useLayoutEffect, useState, useContext } from 'react'
import { themes } from '../constants/colors'
import InfoCard from '../components/InfoCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import ForecastCard from '../components/ForecastCard';
import Loading from '../components/Loading';
import { Context } from '../App';
import InfoModal from '../components/InfoModal';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
var weather = 'sunny';



const MainScreen = ({navigation}) => {


    const Weatherdata =  useContext(Context);


    const [visible,setVisible] = useState(false)
    
    const [loading,setLoading] = useState(false)
   

     
  
    useEffect(() => {
        const fetchForecastData = () => {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=Pathein&cnt=2&appid=795a1cddd32720de41ea778679b40c73`
            fetch(url).then(response => response.json()).then(res => {
                console.log(res)
                
            })
        }
        fetchForecastData()
    })

    
   
        
       
            
       
    

    const setWeatherCondition = (cond) => {
        if(cond === 'Clear'){
            weather = 'Sunny'
        }
    }
    

    
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: Weatherdata.name,
            headerStyle: {
                backgroundColor: Weatherdata.weather[0].main === 'Clouds' ? themes.cloudy : Weatherdata.weather[0].main === 'Clear' ? themes.sunny : themes.rain,
                
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                marginLeft: width/4
              },
              headerShown:  true
          });
        console.log(Weatherdata + "From child")
           
    },[ loading])

    const contents = {
        theme:{
          wind: {
            icon: <MaterialCommunityIcons name="waves" size={40} color={Weatherdata.weather[0].main === 'Clouds' ? themes.cloudy : Weatherdata.weather[0].main === 'Clear' ? themes.sunny : themes.rain} />,
            color: Weatherdata.weather[0].main === 'Clouds' ? themes.cloudy : Weatherdata.weather[0].main === 'Clear' ? themes.sunny : themes.rain,
            property:  Weatherdata.wind.speed.toFixed(1) + ' km/h',
            title: "Wind"
          } ,
          humidity: {
            icon: <MaterialCommunityIcons name="water-outline" size={40} color={Weatherdata.weather[0].main === 'Clouds' ? themes.cloudy : Weatherdata.weather[0].main === 'Clear' ? themes.sunny : themes.rain} />,
            color: Weatherdata.weather[0].main === 'Clouds' ? themes.cloudy : Weatherdata.weather[0].main === 'Clear' ? themes.sunny : themes.rain,
            property: Weatherdata.main.humidity + '%' ,
            title: "Humidity"
          },
          visibility: {
            icon: <Ionicons name="md-eye-outline" size={40} color={Weatherdata.weather[0].main === 'Clouds' ? themes.cloudy : Weatherdata.weather[0].main === 'Clear' ? themes.sunny : themes.rain} />,
            color: Weatherdata.weather[0].main === 'Clouds' ? themes.cloudy : Weatherdata.weather[0].main === 'Clear' ? themes.sunny : themes.rain,
            property: (Weatherdata.visibility/1000).toFixed(1) + ' km' ,
            title: "Visibility"
          } 
        }
    }
  return (
    !loading ? 
    <View style={[
          styles.container,
          Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy}, //Cloudy theme
          Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},  //Sunny Theme
          Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
        
        ]}  
    >
       <View style={[
        styles.firstSection, 
        Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy}, //Cloudy Theme
        Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny}, //Sunny Theme
        Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain} 
        
        ]}
        >
          <View style={[
            styles.wrapper,  
            Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy},
            Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},
            Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
            
            ]}
            >
            <View style={styles.date}>
                <Text style={{color: Weatherdata.weather[0].main === 'Clouds' ? themes.cloudy : Weatherdata.weather[0].main === 'Clear' ? themes.sunny : themes.rain, fontWeight: 'bold'}}>Friday, Jan 22, 2023</Text>
            </View>
            <View style={[
                 Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy},
                 Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},
                 Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
                ]}>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>{Weatherdata.weather[0].main === 'Clouds' ? 'Cloudy': Weatherdata.weather[0].main === 'Clear' ? 'Sunny' : 'Rainy'}</Text>
            </View>
            <View style={[
                styles.temperature,
                Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy},
                Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},
                Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
                ]}
            >
                <Text style={[{color: 'black', fontSize: 160, marginLeft: '10%'}, height <= 750 && {fontSize: 130, color: 'black', }, Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy}]}>
                  {Math.round(Weatherdata.main.temp -273.15)}°
                </Text>
           </View>
           </View>
       </View>
       <View style={[
        styles.secondSection,
        Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy},
        Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},
        Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
        ]}
        >
         <View style={[
            styles.summary,
            Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy},
            Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},
            Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
        ]}
        >  
         <InfoModal data={Weatherdata} visible={visible} setVisible={setVisible}/>

          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', marginVertical: 10}}>Daily Summary</Text>
          <Text style={height <= 750 ? {color: 'black', fontSize: 15} : {color: 'black', fontSize: 18}}>zzzz</Text>
          </View>
          <Pressable  onPress={()=>setVisible(true)} style={styles.info}>
              <InfoCard icon={contents.theme.wind.icon} property={contents.theme.wind.property} title={contents.theme.wind.title} color ={contents.theme.wind.color}/>
              <InfoCard icon={contents.theme.humidity.icon} property={contents.theme.humidity.property} title={contents.theme.humidity.title} color ={contents.theme.humidity.color}/>
              <InfoCard icon={contents.theme.visibility.icon} property={contents.theme.visibility.property} title={contents.theme.visibility.title} color ={contents.theme.visibility.color}/>
          </Pressable>
        <View style={[
            styles.thirdSection,
            Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy},
            Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},
            Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
            ]}
        >
            <View style={[
                styles.forecastTitle,
                Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy},
                Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},
                Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
                ]}>
             <Text style={{fontSize: 20, fontWeight: 'bold'}}>5-day forecast</Text>
             <FontAwesome name="long-arrow-right" size={30} color="black" />
            </View>
            <View style={styles.forecastContainer}>
                <ForecastCard background ={Weatherdata.weather[0].main === 'Clouds' ? themes.cloudy : Weatherdata.weather[0].main === 'Clear' ? themes.sunny : themes.rain}/>
                <ForecastCard background ={Weatherdata.weather[0].main === 'Clouds' ? themes.cloudy : Weatherdata.weather[0].main === 'Clear' ? themes.sunny : themes.rain}/>
                <ForecastCard background ={Weatherdata.weather[0].main === 'Clouds' ? themes.cloudy : Weatherdata.weather[0].main === 'Clear' ? themes.sunny : themes.rain}/>
                <ForecastCard background ={Weatherdata.weather[0].main === 'Clouds' ? themes.cloudy : Weatherdata.weather[0].main === 'Clear' ? themes.sunny : themes.rain}/>
            </View>
        </View>
       </View>
       <StatusBar  backgroundColor={Weatherdata.weather[0].main === 'Clouds' ? themes.cloudy : Weatherdata.weather[0].main === 'Clear' ? themes.sunny : themes.rain}/>
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
        height: "35%",
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
        marginVertical: 15,
        marginTop:5
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