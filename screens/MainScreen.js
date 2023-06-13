import { ActivityIndicator, Dimensions, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View , Pressable, ImageBackground} from 'react-native'
import React, { useEffect, useLayoutEffect, useState, useContext } from 'react'
import { themes } from '../constants/colors'
import InfoCard from '../components/InfoCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import ForecastCard from '../components/ForecastCard';
import Loading from '../components/Loading';
import { Context } from './DrawerStacks';
import InfoModal from '../components/InfoModal';
import { Video,ResizeMode } from 'expo-av';
import Date from '../components/Date';
import MainScreenHeader from '../components/MainScreenHeader';
import { LocationContext } from '../constants/LocationContext';
import moment from 'moment';
import { Feather } from '@expo/vector-icons';






const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;




const MainScreen = ({navigation}) => {


    const Weatherdata =  useContext(Context);

    //State for modal visible passed as props
    const [visible,setVisible] = useState(false)
    
    //Loading state to prevent from uninitialized values
    const [loading,setLoading] = useState(false)

    //State to store the forecast data, useEffect hook will be called again when location changes, location is accessed from highest level component using context API
    const [forecastData, setForecastData] = useState({})
    //Getting the location state using Context API
    const {location} = useContext(LocationContext)
   //Weather condition state
     const [condition, setCondition] = useState('')
    
     
  
    useEffect(() => {
        const fetchForecastData = () => {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=795a1cddd32720de41ea778679b40c73`
            fetch(url).then(response => response.json()).then(res => {
                //console.log(forecastData)
                setForecastData(res)
                
            })
        }
     getWeatherCondition(Weatherdata)
     fetchForecastData()
     //console.log(moment.unix(Weatherdata.dt).utc().add(Weatherdata.timezone,'s').format('H:mm:ss:a')) //correct local time
     console.log(moment().utcOffset(Weatherdata.timezone/60).format('H:mm:ss:a'))
     console.log(moment().utcOffset(Weatherdata.timezone/60).format('H'))
     
     //                                                                                                                                                                                               console.log(forecastData)
     console.log(condition)
    // console.log(Weatherdata)
    },[location,Weatherdata])

    
   
  //Custom drawer icon toggle handler to be passed down as props to Header Component
       const iconPresshandler = () => {
        navigation.toggleDrawer()
       }
            
  //function for setting the correct weather states for different weather conditions, day/night
     
        const getWeatherCondition = (obj) => {

          
           
           //Day Condition
           if(moment().utcOffset(Weatherdata.timezone/60).format('H') === '6'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='7'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='8'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='9'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='10'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='11'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='12'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='13'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='14'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='15'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='16' 
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='17'){
                if(Weatherdata.weather[0].main === 'Clouds'){
                  setCondition('cloudy/day')
                } else if(Weatherdata.weather[0].main === 'Clear'){
                  setCondition('clear/day')
                } else if(Weatherdata.weather[0].main === 'Rain' || Weatherdata.weather[0].main === 'Drizzle') {
                  setCondition('rainy/day')
                } 
           }

           //Night Condition
           else if(moment().utcOffset(Weatherdata.timezone/60).format('H') === '18'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='19'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='20'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='21'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='22'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='23'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='0'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='1'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='2'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='3'
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='4' 
           || moment().utcOffset(Weatherdata.timezone/60).format('H') ==='5'){
            if(Weatherdata.weather[0].main === 'Clouds') {   
              setCondition('cloudy/night')
            } else if (Weatherdata.weather[0].main === 'Clear'){
              setCondition('clear/night')
            }else if (Weatherdata.weather[0].main === 'Rain' || Weatherdata.weather[0].main === 'Drizzle'){
              setCondition('rainy/night')
            } 
         } 
        }
  

   // Fucntion for setting the correct video background according to the different conditions

   const getBackgroundVideo = () => {
       if(condition === 'rainy/day'){
         return (
         <Video 
     
         source={ require('../assets/rainingday.mp4')}
         resizeMode={ResizeMode.COVER}
         
         
          style={{ 
           position: 'absolute',
         top: 0,
         left: 0,
         bottom: 0,
         right: 0,
       }}
         isLooping
         shouldPlay
         useNativeControls={false}
         isMuted
         
        
         /> 
         )
       } else if (condition === 'rainy/night') {
        return (
          <Video 
     
          source={ require('../assets/rainingnight1.mp4')}
          resizeMode={ResizeMode.COVER}
          
          
           style={{ 
            position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
          isLooping
          shouldPlay
          useNativeControls={false}
          isMuted
          
         
          /> 
        )
       } else {
        return
       }
   }
    

    
   
 //Contents to be rendered in a flatlist for main weather conditions,i.e. Wind,Humidity and Visibility
    const contents = {
        theme:{
          wind: {
            icon:  <Feather name="wind" size={40} color="#faf9f6" />,
            color:  '#faf9f6', //Weatherdata.weather[0].main === 'Clouds' ? themes.cloudy : Weatherdata.weather[0].main === 'Clear' ? themes.sunny : themes.rain,
            property:  Weatherdata.wind.speed.toFixed(1) + ' km/h',
            title: "Wind"
          } ,
          humidity: {
            icon: <MaterialCommunityIcons name="water-outline" size={40} color={'#faf9f6'} />,
            color:  '#faf9f6', //Weatherdata.weather[0].main === 'Clouds' ? themes.cloudy : Weatherdata.weather[0].main === 'Clear' ? themes.sunny : themes.rain,
            property: Weatherdata.main.humidity + '%' ,
            title: "Humidity"
          },
          visibility: {
            icon: <Ionicons name="md-eye-outline" size={40} color={'#faf9f6'} />,
            color:  '#faf9f6', //Weatherdata.weather[0].main === 'Clouds' ? themes.cloudy : Weatherdata.weather[0].main === 'Clear' ? themes.sunny : themes.rain,
            property: (Weatherdata.visibility/1000).toFixed(1) + ' km' ,
            title: "Visibility"
          } 
        }
    }


  return (
    !loading ? 
    <ImageBackground resizeMode='cover' source = {condition === 'cloudy/night' ? require('../assets/cloudynight.png') : condition === 'clear/night' ? require('../assets/clearnight1.png') : condition === 'cloudy/day' ? require('../assets/cloudyday.png') : require('../assets/clearday.png')}   
    style={[
          styles.container,
        //   Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy}, //Cloudy theme
        //   Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},  //Sunny Theme
        //   Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
        
        ]}  
    >   
        {getBackgroundVideo()}
  
     <MainScreenHeader name={Weatherdata.name} iconPresshandler={iconPresshandler}/>
       <View style={[
        styles.firstSection, 
        // Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy}, //Cloudy Theme
        // Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny}, //Sunny Theme
        // Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain} 
        
        ]}
        >
          <View style={[
            styles.wrapper,  
            // Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy},
            // Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},
            // Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
            
            ]}
            >
            <Date date={{dt: Weatherdata.dt, timezone: Weatherdata.timezone}}/>
            <View style={[
                //  Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy},
                //  Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},
                //  Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
                ]}>
                <Text style={{color: '#faf9f6', fontFamily:'Domine-Bold', fontSize: 19}}>{Weatherdata.weather[0].main === 'Clouds' ? 'Cloudy': Weatherdata.weather[0].main === 'Clear' ? 'Clear' : 'Rainy'}</Text>
            </View>
            <View style={[
                styles.temperature,
                // Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy},
                // Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},
                // Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
                ]}
            >
                <Text style={[{color: '#faf9f6', fontSize: 160, marginLeft: '10%'}, height <= 750 && {fontSize: 130, color: '#faf9f6', }]}>
                  {Math.round(Weatherdata.main.temp -273.15)}°
                </Text>
           </View>
           </View>
       </View>
       <View style={[
        styles.secondSection,
        // Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy},
        // Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},
        // Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
        ]}
        >
         <View style={[
            styles.summary,
            // Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy},
            // Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},
            // Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
        ]}
        >  
         <InfoModal data={Weatherdata} visible={visible} setVisible={setVisible}/>

          <Text style={{color: '#faf9f6', fontSize: 18, marginVertical: 10, fontFamily:'Domine-Bold'}}>Daily Summary</Text>
          <Text style={height <= 750 ? {color: '#faf9f6', fontSize: 14, fontFamily: 'Domine'} : {color: '#faf9f6', fontSize: 16,fontFamily:'Domine'}}>
            Now, it feels like {Math.round(Weatherdata.main.feels_like -  273.15)}°C.
            The actual temperature is {Math.round(Weatherdata.main.temp -  273.15)}°C,
            The temperature is felt between {Math.round(Weatherdata.main.temp_min - 273.15)}°C and {Math.round(Weatherdata.main.temp_max-273.15)}°C.
            The weather condition in {Weatherdata.name} is best described as '{Weatherdata.weather[0].description}'.
          </Text>
          </View>
          <Pressable  onPress={()=>setVisible(true)}  style={styles.info}>
              <InfoCard icon={contents.theme.wind.icon} property={contents.theme.wind.property} title={contents.theme.wind.title} color ={contents.theme.wind.color}/>
              <InfoCard icon={contents.theme.humidity.icon} property={contents.theme.humidity.property} title={contents.theme.humidity.title} color ={contents.theme.humidity.color}/>
              <InfoCard icon={contents.theme.visibility.icon} property={contents.theme.visibility.property} title={contents.theme.visibility.title} color ={contents.theme.visibility.color}/>
          </Pressable>
          </View>
        <View style={[
            styles.thirdSection,
            // Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy},
            // Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},
            // Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain}
            ]}
        >
            <Pressable onPress={()=>navigation.navigate('Forecast Screen',{forecastData: forecastData, date: Weatherdata.dt,timezone: Weatherdata.timezone})} style={[
                styles.forecastTitle,
                // Weatherdata.weather[0].main === 'Clouds' && {backgroundColor: themes.cloudy},
                // Weatherdata.weather[0].main === 'Clear' && {backgroundColor: themes.sunny},
                // Weatherdata.weather[0].main === 'Rain' && {backgroundColor: themes.rain}s
                ]}>
             <Text style={{fontSize: 18, fontFamily: 'Domine-Bold', color: '#faf9f6'}}>5-day forecast</Text>
             <FontAwesome name="long-arrow-right" size={30} color="white" />
            </Pressable>
            <View style={styles.forecastContainer}>
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
            </View>
        </View>
       
       <StatusBar transperant={true}/>
    </ImageBackground>

    :
    <Loading />
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container:{
        
        flex: 1,
        width: width
    },
    wrapper:{
        
        //backgroundColor: weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
        width: width-10,
        height: '100%',
        
        
        justifyContent: 'center',
        alignItems: 'center'
    },

    firstSection: {
        //backgroundColor: weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
        
        height: "35%",
        width: width,
        alignItems: 'center',
       // backgroundColor: 'green'
        
    },

    weather:{
        //backgroundColor: weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
        height: 30,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temperature:{
          //backgroundColor: weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
          width: width-10,
          justifyContent:'center',
          alignItems: "center",
          height: '70%'
    },
    secondSection:{
        //backgroundColor: weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
        height: '37%',
        alignItems: 'center',
        //backgroundColor: 'white'
        
    },
    summary:{
        width: width-50,
       // backgroundColor: weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
        height: '55%',
        marginBottom: 1,
        
    },
    info: {
        
        width: width-50,
        height : '45%',
        borderRadius: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'white'
        
    },
    thirdSection:{
       // backgroundColor: weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
        height: '21%',
        width: width-50,
        //backgroundColor: 'green',
        alignSelf: 'center'
    },
    forecastTitle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '30%',
        //backgroundColor: weather == 'rain' ? themes.rain : weather === 'cloudy' ? themes.cloudy : themes.sunny,
        alignItems:'center',
      
    },
    forecastContainer:{
        flexDirection: 'row',
        height: '70%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        //backgroundColor: 'red'
        
    }

})