import {StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import Pdf from 'react-native-pdf'
import RenderError from '../DataBaseFetch/RenderError'
import Activity from '../DataBaseFetch/FetchingActivity';
import NetInfo from '@react-native-community/netinfo'


const PdfRender = () => {

  const route = useRoute();
  const data = route.params;
  const { param } = data
  const file_path = param;
  const source = { uri: file_path, cache: true }
  const [isConnected, setIsConnected] = useState(false)

  const checkInternet = async () => {
    const state = await NetInfo.fetch();
    if (state.isConnected == false) {
      setIsConnected(state.isConnected)
    }
    else if (state.isConnected == true) {
      setIsConnected(state.isConnected)
    }
  }
  useEffect(() => {
    checkInternet()
  }, [])

  const PdfRenderComponent = () => {
    if (file_path != undefined && isConnected) {
      return (
        <Pdf source={source}
          style={styles.pdf}
          showsVerticalScrollIndicator
          onError={(error) => console.log(error)}
          trustAllCerts={false}
          renderActivityIndicator={(progress) => <Activity />}
          onLoadComplete={() => console.log('completed')}
        />
      )
    }
    else if (isConnected) {
      return (
        <RenderError mssg={'No pdf available to view'} homeState={false} />
      )
    }
    else {
      return (
        <RenderError mssg={'No internet connection'} homeState={true} />
      )
    }
  }

  return (

    <PdfRenderComponent />

  )

}



const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default PdfRender