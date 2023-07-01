import { StatusBar, StyleSheet, Text, View , TextInput, Image, Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react'
import * as MailComposer from 'expo-mail-composer'
import CustomButton from '../components/CustomButton';
import FeedbackScreenHeader from '../components/FeedbackScreenHeader';
import FeedbackError from '../components/FeedbackError';


const {width, height} = Dimensions.get('window');

const FeedBack = ({navigation}) => {
    
    const [isAvailable, setIsAvailable] = useState(false)
    const [subject, setSubject] = useState('Feedback for Go Weather')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState(`${name}, ${email}`)
    const [recipient, setRecipient] =  useState('kzeel3345@gmail.com')
    const [err, setErr] = useState(false)


    useEffect(() => {
        const checkAvailability = async() => {
            const isAvailableAsync = await MailComposer.isAvailableAsync();
            console.log(isAvailableAsync)
           setIsAvailable(!isAvailableAsync)
           console.log(isAvailable)
        }

        checkAvailability()
    },[])

  //function for toggling the drawer
   const iconPresshandler = () => {
    navigation.toggleDrawer()

   

   }

   //function for handling the 'Send' button

    const sendEmail = () => {

    if(!isAvailable) {
        setErr(true)
        return
    }
        MailComposer.composeAsync({
            recipients: [recipient],
            body: body,
            subject: subject
        })
        setName('')
        setEmail('')
        setBody('')
        alert('Thank you for submitting your feedback.')
       
    }

  

  if(!err){ 
  return (
    <View style={styles.container}>
        <FeedbackScreenHeader iconPressHandler = {iconPresshandler}/>
      <View style={styles.wrapper}>
            <View style={styles.imageView}>
               <Image source={require('../assets/feedback.png')} style={{width: '100%', height: '100%'}}/>
            </View>
            <View style={styles.inputView}>
              <View style={{ flex: 0.5}}>
                    <View style={{flex:0.5, justifyContent:'space-around'}}>
                        <Text style={{fontFamily: 'Domine', color:'#393E46'}}>Your name</Text>
                        <TextInput onPress={() => setName(e)} placeholder="Your name" style={{width: '70%', flex: 0.6, borderRadius:10, paddingLeft: 10,borderRadius:5, borderWidth:1,  borderColor: '#393E46', fontFamily:'Domine'}}/>
                    </View>
                    <View style={{flex:0.5, justifyContent:'space-around'}}>
                        <Text style={{fontFamily: 'Domine', color:'#393E46'}}>Your email</Text>
                    <TextInput onPress={(e) => setEmail(e)} placeholder="Your email" style={{width: '70%', flex: 0.6, borderRadius: 10, paddingLeft: 10,borderRadius:5, borderWidth:1, borderColor: '#393E46', fontFamily:'Domine'}}/>
                    </View>
                </View>
                <View style={{flex:0.5, justifyContent:'center'}}>
                  <TextInput onChangeText={(e) => setBody(e)} placeholder="Your feedback goes here" textAlignVertical= 'top' style={{borderRadius:5, borderWidth:1, width:'100%', height:'90%', padding: 10 , borderColor: '#393E46', fontFamily:'Domine'}}/>
                </View>
            </View>
            <View style={styles.buttonView}>
                 <CustomButton onPress={sendEmail} width={'35%'} title={"Send"}  height={'60%'} borderRadius={20} borderWidth={1} borderColor={'#393E46'} color={'#393E46'} goBackHandler={() => console.log('Go back handler not in action')}/>
            </View>
      </View>
      <StatusBar />
    </View>
  )
  }else{
    return <FeedbackError  pressHandler={() => {navigation.navigate('Home'); setErr(false)}}/>
  }
}

export default FeedBack

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        //justifyContent:'center',
        alignItems:'center'
    },
    wrapper: {
        width: width - 50,
        flex:0.8,
        //backgroundColor:'red'
    },
    imageView: {
        flex: 0.4
    }, 
    inputView: {
        flex: 0.5,
       // backgroundColor:'green',
        width:'100%',
        
    },
    buttonView: {
        flex: 0.1,
       // backgroundColor: 'blue',
        justifyContent:'center',
        alignItems:'center'
    }
})