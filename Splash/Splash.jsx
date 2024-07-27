import { View, Text, ActivityIndicator, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'

const Splash = () => {
  const colorScheme=useColorScheme();
  console.log(colorScheme);
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 5,backgroundColor:colorScheme=='dark'?"black":"white" }}>
      <Text style={{ fontSize: 36, color: 'black', fontWeight: 'bold' ,color:colorScheme=='dark'?"white":"black"}}>Notes-Sphere</Text>
      <View style={styles.loading}>
        <ActivityIndicator color={colorScheme=='dark'?"white":"black"} />
        <Text style={{color:colorScheme=='dark'?"white":"black"}}>Loading..</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    bottom: '10%',
    alignItems:'center',
    justifyContent:'center',
    gap:2
  }
})
export default Splash