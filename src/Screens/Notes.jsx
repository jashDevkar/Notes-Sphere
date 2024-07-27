import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { NoteList } from '../Data/YearList';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import styles from '../../Style/Styles'


const Notes = ({ navigation }) => {

  const route = useRoute();
  const data = route.params;
  const { year } = data  //{SE}
  // console.log(data) //{year:SE}

  const goTo = (render = "") => {
    if (render != "" && year != "") { //checking if year clicked is SE or not
      navigation.navigate('Subjects', {
        year,
        render
      })
    }
    else {
      navigation.navigate('Construction')
    }
  }
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  return (

    <ScrollView style={{ backgroundColor: '#F5F5F5' }}>
      <View style={styles.container}>
        {
          NoteList.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => {
              goTo(item['data']);
              ReactNativeHapticFeedback.trigger("effectClick", options)
            }} style={styles.card2}>
              <Text style={styles.cardText}>{item['title']}</Text>
              <Image source={require('../../Assets/Images/right.png')} style={styles.rightArrow} />
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>

  )
}

export default Notes