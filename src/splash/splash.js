import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Animated,
  AsyncStorage,
} from 'react-native';
import {StatusBar} from 'react-native';
// import PushNotification from "react-native-push-notification";

const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      load();
    }, 3000);
  }, []);

  const load = () => {
    {
      props.navigation.navigate('Register');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1E90FF" barStyle="default" />
      <Image source={require('../assets/splash.png')} style={styles.image} />
      <Text style={styles.text}>Izikjon</Text>
      <Text style={styles.texts}>...Grand Masters Of Instant Payments</Text>
      {/* {this.load()} */}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 220,
    resizeMode: 'contain',
    marginTop: 105,
    // alignItems: "center"
  },

  container: {
    backgroundColor: 'white',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    fontSize: 48,
    marginTop: 41.6,
    fontFamily: 'comfortaa',
  },
  texts: {
    marginTop: 85,
    fontSize: 17,
    color: '#1E90FF',
  },
});
