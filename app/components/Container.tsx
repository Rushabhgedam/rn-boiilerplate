import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'

const Container = ({children, customStyles}: {children:React.ReactNode, customStyles?:StyleProp<ViewStyle>}) => {
  return (
    <View style={[{flex:1, backgroundColor:"#ffffff"},customStyles]}>
      {children}
    </View>
  )
}

export default Container

const styles = StyleSheet.create({})