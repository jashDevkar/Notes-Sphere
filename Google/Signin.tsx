import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth';
import Activity from '../DataBaseFetch/FetchingActivity';
// import { Input } from '@rneui/themed';
import { TextInput } from 'react-native-paper';

const Signin = () => {
    const [loading, setLoading] = useState(false)
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: "407616728383-u21l0fvec03mvgk8mdrm4dascd8d0ri9.apps.googleusercontent.com",
        })

    }, [])

    async function onGoogleButtonPress() {
        try {

            await GoogleSignin.hasPlayServices();
            const meta = await GoogleSignin.signIn();
            setLoading(true)
            const googleCredential = auth.GoogleAuthProvider.credential(meta.idToken);
            await auth().signInWithCredential(googleCredential)
            setLoading(false)
        } catch (error) {
            if (error.code == statusCodes.SIGN_IN_CANCELLED) {
                Alert.alert('SignIn Cancelled')
            } else if (error?.code === statusCodes.IN_PROGRESS) {

            } else if (error?.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert('Play service not detected')
            } else {
                Alert.alert('Error occured while signing in', error?.code)
            }
            setLoading(false)


        }

    }
    return (
        <View style={{ flex: 1 }}>
            {
                loading ?
                    <Activity />
                    :
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, paddingHorizontal: 40 }}>
                        
                        
                        <TextInput placeholder='Username' style={styles.input} onChangeText={(text)=>setUsername(text)}/>
                        <TextInput placeholder='Password' style={styles.input} onChangeText={(passwordText)=>setPassword(passwordText)}/>
                        <TouchableOpacity style={[styles.submit]}>
                            <Text style={{color:'white',fontSize:16}}>Sign-In</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize:20,marginVertical:5,color:'black',}}>OR</Text>
                        <GoogleSigninButton onPress={() => onGoogleButtonPress()}
                            color={GoogleSigninButton.Color.Dark}
                            style={styles.SignInBtn}
                            disabled={false} />
                    </View>

            }
        </View>
    )





}
const styles = StyleSheet.create({
    SignInBtn: {
        width: 250,
        height: 50,
    },
    input: {
        width: '100%',
        backgroundColor:'transparent',
        marginBottom:15,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        
        
    },
    submit:{
        width:'100%',
        textAlign:'center',
        alignItems:'center',
        borderWidth:1,
        paddingVertical:4,
        backgroundColor:'black',
        borderRadius:32,
        marginTop:10
        
    }

})


export default Signin