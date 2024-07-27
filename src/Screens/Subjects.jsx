import { Image, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import Even from '../../DataBaseFetch/Even';
import Odd from '../../DataBaseFetch/Odd'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator()
const Subjects = () => {
    const route = useRoute();
    const data = route.params  //data={year:SE,render:notes}
    // console.log(data) //{render:notes,year:SE}
    return (
        <BottomNav param={data} />
    )
}

const BottomNav = ({ param }) => {

    // console.log(param)  //{Year:SE,render:notes}

    return (
        <Tab.Navigator tabBarPosition='bottom'
            screenOptions={{

                tabBarIndicatorStyle: {
                    backgroundColor: 'black',
                    position: 'top',
                }
            }}>

            <Tab.Screen name='Odd Sem' component={Odd}
                initialParams={
                    {
                        param: param  // {param:{year:SE,render:notes}}
                    }
                }
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../../Assets/Images/book.png')} style={[styles.bottom_image, { tintColor: focused ? 'black' : '#A9A9A9' }]} />
                    )
                }}

            />
            <Tab.Screen name='Even Sem' component={Even}
                initialParams={
                    {
                        param: param   //{param:{year:SE,render:notes}}
                    }
                }
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../../Assets/Images/book.png')} style={[styles.bottom_image, { tintColor: focused ? 'black' : '#A9A9A9' }]} />
                    )
                }}

            />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    bottom_image: {
        width: 24,
        height: 24,
    },
    image_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tab: {
        position: 'absolute',
        bottom: 24,
        left: 24,
        right: 24,
        borderRadius: 32,
        paddingVertical: 0,
        elevation: 24,
        height: 64,
    },
    titleStyle: {
        color: '#000000'
    }
})

export default Subjects