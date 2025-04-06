import React, {createContext, ReactElement, useState} from 'react';
import {StyleSheet} from 'react-native';
import {boolean} from 'yup';

type AuthValues = {
  isLoggedIn?: boolean;
  setIsLoggedIn?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext({} as AuthValues);

const AuthProvider = ({children}: {children: ReactElement}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

const styles = StyleSheet.create({});
