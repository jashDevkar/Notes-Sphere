import { StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Main from './Main/Main'

const App = () => {


  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={'black'} />
      <Main />
    </SafeAreaProvider>

  )
}

export default App;



