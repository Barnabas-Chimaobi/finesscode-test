import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.views}>
          <View style={styles.view1}>
            <Image source={require('../assets/baseline.png')} />
          </View>
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              source={require('../assets/user.png')}
            />
          </View>
          <View>
            <Text style={styles.getStarted}>Let's Sign you In</Text>
            <Text style={styles.create}>Welcome, we have missed you</Text>
          </View>
          <View style={styles.emailView}>
            <Image source={require('../assets/email.png')} />
            <Text style={styles.gmail}>jmartins@gmail.com</Text>
            <Image source={require('../assets/check.png')} />
          </View>
          <View style={styles.passwordView}>
            <Image source={require('../assets/lock.png')} />
            <Text style={styles.password}>..............</Text>
            <Image source={require('../assets/check.png')} />
          </View>
          <Text style={styles.forgot}>Forgot your credentials?</Text>
          <View style={styles.termsView}>
            <Image source={require('../assets/checkk.png')} />
            <View style={styles.terms1}>
              <Text style={styles.createaccount}>
                By creating an account, you agree to our
              </Text>
              <TouchableWithoutFeedback>
                <Text style={styles.terms}>Terms and Conditions</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.button}>
            <TouchableWithoutFeedback>
              <Text style={styles.buttontext}>Sign Up</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  view1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 65,
    marginLeft: 20,
    marginRight: 20,
  },
  views: {
    height: 180,
    backgroundColor: '#E3F2FD',
  },
  signin: {
    color: '#1E90FF',
    fontSize: 15,
  },
  account: {
    fontSize: 15,
  },
  image: {
    marginTop: 45,
    borderWidth: 7,
    borderColor: 'white',
    borderRadius: 50,
    height: 90,
    width: 90,
    alignSelf: 'center',
  },
  getStarted: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-light',
    marginLeft: '19%',
    marginTop: 12,
  },
  create: {
    marginLeft: '19%',
    fontSize: 18,
    marginTop: 12,
    color: '#757575',
  },
  emailView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginLeft: 25,
    marginRight: 20,
    height: 45,
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
  },
  gmail: {
    fontSize: 17,
  },
  passwordView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 45,
    marginLeft: 25,
    marginRight: 20,
    height: 45,
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
  },
  password: {
    fontSize: 20,
  },
  forgot: {
    fontSize: 15,
    marginTop: 20,
    marginLeft: '30%',
  },
  termsView: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '7%',
    marginRight: '5%',
    marginTop: 40,
  },
  terms1: {
    marginLeft: 15,
    display: 'flex',
    flexDirection: 'column',
    marginTop: -10,
  },
  terms: {
    color: '#1E90FF',
    fontSize: 17,
  },
  createaccount: {
    fontSize: 17,
  },
  buttontext: {
    alignSelf: 'center',
    paddingTop: 10,
    color: 'white',
  },
  button: {
    height: 44,
    width: 341,
    marginLeft: '6%',
    borderRadius: 20,
    marginTop: 80,
    backgroundColor: '#1E90FF',
  },
  container: {
    // flex: 1,
  },
});
