import React from 'react';
import { StyleSheet, View, StatusBar, ImageBackground, Text, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialButtonViolet1 from './src/components/MaterialButtonViolet1';
import { Input } from './node_modules/react-native-elements';

export default function App() {
  const backgroundImage = './src/assets/images/Gradient_ZFxCpGH.png';
  const image = './assets/login.png';
  const iconEamil = { type: 'font-awesome', name: 'envelope', size: 12, color: 'gray' };
  const iconPassword = { type: 'font-awesome', name: 'lock', size: 15, color: 'gray' };
  const input = React.createRef();
  return (
    <View>
      <StatusBar animated translucent backgroundColor='transparent' barStyle='light-content' />
      <ImageBackground
        style={styles.rect}
        // eslint-disable-next-line global-require
        source={require(backgroundImage)}
      >
      <Image
        // eslint-disable-next-line global-require
        source={require(image)}
        style={styles.image}
      />
      {/* <Icon name='home-circle' style={styles.icon} /> */}
      </ImageBackground>
      <View style={styles.card}>
        <Text style={styles.login}>LOGIN</Text>
        <Input
          inputStyle={styles.inputControl}
          label='EMAIL'
          placeholder='Email'
          labelStyle={styles.labelEmail}
          inputContainerStyle={styles.inputStyle}
          leftIcon={iconEamil}
          leftIconContainerStyle={styles.iconLeftStyle}
          ref={input}
        />
        <Input
          inputStyle={styles.inputControl}
          label='PASSWORD'
          placeholder='Password'
          labelStyle={styles.labelPassword}
          inputContainerStyle={styles.inputStyle}
          leftIcon={iconPassword}
          leftIconContainerStyle={styles.iconLeftStyle}
          secureTextEntry
        />
      </View> 
      <MaterialButtonViolet1 style={styles.materialButtonViolet1} />
      <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Background Gradient
  rect: {
    width: 400,
    height: 400,
  },
  icon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 100,
    alignSelf: 'center',
    marginTop: 100
  },

  // Image
  image: {
    width: 300,
    height: 150,
    marginTop: 80,
    alignSelf: 'center'
  },

  // Card
  card: {
    alignSelf: 'center',
    top: -100,
    width: 331,
    height: 315,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0,1)',
    elevation: 2,
  },
  login: {
    color: '#121212',
    fontSize: 15,
    marginTop: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  // Form Input
  inputControl: {
    height: 10, 
    fontSize: 15, 
    marginLeft: 5,
    marginBottom: -5
  },
  labelEmail: {
    marginTop: 40,
    fontSize: 13,
    color: '#426BD8',
    marginLeft: 13
  },
  labelPassword: {
    marginTop: 10,
    fontSize: 13,
    color: '#426BD8',
    marginLeft: 13
  },
  inputStyle: {
    width: 280, alignSelf: 'center'
  },
  iconLeftStyle: {
    marginBottom: -3
  },

  // Button
  materialButtonViolet1: {
    height: 49,
    width: 221,
    position: 'absolute',
    alignSelf: 'center',
    top: 590,
    borderRadius: 30,
    backgroundColor: 'rgba(66,107,216,1)'
  },

  // Forgot Passowrd
  forgotPassword: {
    color: '#121212',
    fontSize: 12,
    textAlign: 'center',
    marginTop: -50
  }
});
