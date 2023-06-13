import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment';

const Date = ({date}) => {

    const [dateTime, setDateTime] = useState(0);

    useEffect(() => {
      let dateString =   moment().utcOffset(date.timezone/60).format('dddd, MMMM Do YYYY');
      setDateTime(dateString);
    },[])


  return (


 <View style={styles.date}>
    <Text style={{color:'#faf9f6', fontFamily:'Domine-Bold', fontSize: 13}}>{dateTime}</Text>
</View>
  )
}

export default Date

const styles = StyleSheet.create({
    date:{
        borderWidth: 1,
        borderColor: '#faf9f6',
        height: 30,
        width: 190,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginVertical: 15,
        marginTop:5
    },
})