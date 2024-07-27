import { Image, Text, View } from 'react-native'
import React from 'react'

const UnderConstruction = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',gap:10}}>
      <Image source={require('../../Assets/Images/cone.png')} style={{width:'20%',height:'10%'}}/>
      <Text style={{fontSize:24,color:'black'}}>Under Construction</Text>
    </View>
  )
}

export default UnderConstruction

