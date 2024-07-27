import { View, Text, Image } from 'react-native'
import React from 'react'

const Download = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',gap:10,backgroundColor:'#F5F5F5'}}>
      <Image source={require('../../Assets/Images/cone.png')} style={{width:'20%',height:'10%'}}/>
      <Text style={{fontSize:24,color:'black'}}>Download</Text>
    </View>
  )
}

export default Download