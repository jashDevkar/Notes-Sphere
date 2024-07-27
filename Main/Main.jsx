import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Navigation from '../src/Navigation/Navigation'
import auth from '@react-native-firebase/auth';
import Signin from '../Google/Signin'
import Splash from '../Splash/Splash';

const Stack = createNativeStackNavigator()
const Main = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            const subscriber = auth().onAuthStateChanged(currentUser => setUser(currentUser));
            setLoading(false)
            return subscriber;
        }, 2500)
    }, []);

    if (loading) {
        return (
            <Splash />
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    user ? <Stack.Screen name='MainApp' component={Navigation} options={{ headerShown: false }} />
                        :
                        <Stack.Screen name='Signin' component={Signin} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main