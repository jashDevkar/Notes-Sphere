import { View, Text, TouchableOpacity, Image, Button } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react'
import styles from '../../Style/Styles';
import NetInfo from '@react-native-community/netinfo'


const Profile = () => {

  const [time, setTime] = useState(null)
  const [isConnected, setIsConnected] = useState(false)
  const signOut = async () => {
    try {

      await GoogleSignin.signOut();
      await auth().signOut();

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const login = auth().currentUser?.metadata.lastSignInTime
    setTime(new Date(login).toLocaleString())

    const checkInternet = async () => {
      const state = await NetInfo.fetch()
      setIsConnected(state.isConnected)

    }
    checkInternet()
  })


  return (


    <View style={{ flex: 1, alignItems: 'center', gap: 16, backgroundColor: '#F5F5F5', justifyContent: 'center' }}>
      <View style={styles.infoCard}>
        {
          isConnected ?
            <View style={{ alignItems: 'center' }}>
              <Image source={{ uri: auth().currentUser.photoURL }} width={100} height={100} borderRadius={50} />
            </View>
            :
            null
        }
        <View gap={5}>
          <Text style={styles.infoTxt}>Name:-  {auth().currentUser?.displayName}</Text>
          <Text style={styles.infoTxt}>Email:-  {auth().currentUser?.email}</Text>
          <Text style={styles.infoTxt}>last sign In :- {time}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => signOut()} style={styles.signOut}>
        <Text style={styles.signOutTxt}>Sign Out</Text>
      </TouchableOpacity>


    </View>


  )
}

export default Profile