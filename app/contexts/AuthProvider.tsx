import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, ReactElement } from 'react'


const AuthContext = createContext({})

const AuthProvider = ({children}:{children: ReactElement}) => {
  return (
   <AuthContext.Provider value={{}}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider

const styles = StyleSheet.create({})