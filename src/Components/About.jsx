import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container }>
      <Text style={{fontWeight:'bold',fontSize:24,color:'#000000'}}>About Us</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})