import { View, Text, TouchableOpacity, ScrollView, Image, Animated, Easing, useColorScheme } from 'react-native'
import React, { useRef } from 'react'
import { YearList } from '../Data/YearList'
import styles from '../../Style/Styles'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";


const Home = ({ navigation }) => {

  const colorScheme=useColorScheme()


  const position =  useRef(new Animated.ValueXY({ x: 0, y: 120 })).current //it is reference to animated class
  Animated.spring(position, {
    toValue: { x: 0, y: 0 },
    bounciness: 12,
    speed:5,
    useNativeDriver: true,

  }).start();

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  return (

    <ScrollView style={{ backgroundColor: '#F5F5F5' }}>

      <Animated.View style={[styles.container, { transform: [{ translateX: position.x }, { translateY: position.y }] }]}>
        {
          YearList.map((item, index) => (
            <TouchableOpacity style={[styles.card]} onPress={() => {
              navigation.navigate('Notes', {
                year: item['year'],
                feedBack: options
              })
              ReactNativeHapticFeedback.trigger("effectClick", options);
            }} key={item.id}>
              <Text style={styles.cardText}>{item.title}</Text>
              <Image source={require('../../Assets/Images/right.png')} style={styles.rightArrow} />
            </TouchableOpacity>

          ))
        }
        <TouchableOpacity style={[styles.card2,]} onPress={() => {
          navigation.navigate('About-Us')
          ReactNativeHapticFeedback.trigger("effectClick", options);
        }} >
          <Text style={styles.cardText}>About Us</Text>
          <Image source={require('../../Assets/Images/right.png')} style={styles.rightArrow} />
        </TouchableOpacity>
      </Animated.View>

    </ScrollView>
  )
}

export default Home