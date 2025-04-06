import { ErrorMessage, Formik } from 'formik';
import React, { useReducer } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Button, DefaultTheme, Icon, TextInput } from 'react-native-paper';
import * as Yup from 'yup';
import { Container } from '../../components';

const initialState = {
  emailId: '',
};

const registerReducer = (
  state: typeof initialState,
  action?: {type: string; payload: string},
) => {
  switch (action?.type) {
    case 'UPDATE_EMAIL':
      return {...state, emailId: action.payload ?? ''};
    case 'UPDATE_MOBILE':
      return {...state, mobileNumber: action.payload ?? ''};
    case 'UPDATE_PASSWORD':
      return {...state, password: action.payload ?? ''};
    case 'UPDATE_CNF_PASSWORD':
      return {...state, confirmPassword: action.payload ?? ''};
    default:
      return state;
  }
};

const RegisterScreen = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);
  console.log(state);

  const validationSchema = Yup.object({
    emailId: Yup.string()
      .required('This is field required.')
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email format',
      ),
    mobileNumber: Yup.string()
      .required('This is field is required')
      .min(10)
      .max(10),
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
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password')],
      'Passwords must match',
    ),
  });

  return (
    <ScrollView>
    <Container customStyles={{paddingHorizontal:10}}>
      <Formik
        initialValues={{
          emailId: '',
          mobileNumber: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={value => {
          console.log(value);
          dispatch()
        }}
        validationSchema={validationSchema}>
        {({handleSubmit, handleChange, handleBlur, values}) => (
          <>
            <TextInput
              onChangeText={handleChange('emailId')}
              onBlur={handleBlur('emailId')}
              value={values.emailId}
              mode="outlined"
              underlineColorAndroid={'#00000000'}
              label={'Email id'}
              outlineStyle={{
                borderWidth: 1,
              }}
            />
            <ErrorMessage name="emailId" component={Text} />
            <TextInput
              onChangeText={handleChange('mobileNumber')}
              onBlur={handleBlur('mobileNumber')}
              value={values.mobileNumber}
              mode="outlined"
              underlineColorAndroid={'#00000000'}
              label={'Mobile Number'}
              outlineStyle={{
                borderWidth: 1,
              }}
            />
            <ErrorMessage name="mobileNumber" component={Text} />
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
              right={<Icon source={"eye"} size={20} color={DefaultTheme.colors.primary} />}
            />
            <ErrorMessage name="password" component={Text} />
            <TextInput
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              mode="outlined"
              underlineColorAndroid={'#00000000'}
              label={'Confirm password'}
              outlineStyle={{
                borderWidth: 1,
              }}
            />
            <ErrorMessage name="confirmPassword" component={Text} />

            <Button onPress={()=> handleSubmit()}>Submit</Button>
          </>
        )}
      </Formik>
    </Container>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
