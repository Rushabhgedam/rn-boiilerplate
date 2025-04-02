import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Container = ({children}: {children:React.ReactNode}) => {
  return (
    <View style={{flex:1, backgroundColor:"#ffffff"}}>
      {children}
    </View>
  )
}

export default Container

const styles = StyleSheet.create({})