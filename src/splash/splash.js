import React, {Component} from 'react';
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

export default class Splash extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      password: null,
      regno: null,
      PersonDetails: null,
    };

    // PushNotification.localNotificationSchedule({
    //   message: "My Notification",
    //    date: new Date(Date.now() + 500 * 1000),
    // })
  }

  //   async componentDidMount() {
  //     setTimeout(() => {
  //       this.load();
  //     }, 3000);
  //   }

  //   load = () => {
  //     {
  //       this.props.navigation.navigate('Login');
  //     }
  //   };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1E90FF" barStyle="default" />
        <Image source={require('../assets/splash.png')} style={styles.image} />
        <Text style={styles.text}>Izikjon</Text>
        <Text style={styles.texts}>...Grand Masters Of Instant Payments</Text>
        {/* {this.load()} */}
      </View>
    );
  }
}

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
