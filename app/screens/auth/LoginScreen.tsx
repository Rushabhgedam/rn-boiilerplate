import {ParamListBase, RouteProp} from '@react-navigation/native';
import {ErrorMessage, Formik} from 'formik';
import React from 'react';
import {Alert, Image, ScrollView, StyleSheet, View} from 'react-native';
import {Avatar, Button, Text, TextInput} from 'react-native-paper';
import * as Yup from 'yup';
import {Container} from '../../components';
import {zomato} from '../../assets';
import {responsiveHeight} from '../../Utils/dimensions';

const LoginScreen: React.ComponentType<{
  route: RouteProp<ParamListBase, 'loginscreen'>;
  navigation: any;
}> = ({navigation}) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email format',
      )
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(
        /[@$!%*?&]/,
        'Password must contain at least one special character (@$!%*?&)',
      )
      .required('Password is required'),
  });

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flex: 1, backgroundColor: 'red'}}>
      <Container
        customStyles={{paddingHorizontal: '4%', justifyContent: 'center'}}>
        <Image
          source={zomato}
          style={{
            height: 100,
            width: 100,
            resizeMode: 'stretch',
            alignSelf: 'center',
          }}
        />
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
          validateOnChange
          validateOnMount
          onSubmit={values => Alert.alert("Title",JSON.stringify(values))}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                mode="outlined"
                underlineColorAndroid={'#00000000'}
                label={'Email'}
                outlineStyle={{
                  borderWidth: 1,
                }}
              />

              <ErrorMessage name="email" component={Text} />
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                mode="outlined"
                underlineColorAndroid={'#00000000'}
                label={'Password'}
                outlineStyle={{
                  borderWidth: 1,
                }}
              />
              <ErrorMessage name="password"  component={Text} />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text onPress={()=> navigation.navigate("registerscreen")} style={{marginVertical: responsiveHeight(1)}}>
                  Register now
                </Text>
                <Text onPress={()=> navigation.navigate("forgetpasswordscreen")} style={{marginVertical: responsiveHeight(1)}}>
                  Forget password ?
                </Text>
              </View>
              <Button onPress={handleSubmit}>Submit</Button>
            </>
          )}
        </Formik>
      </Container>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
