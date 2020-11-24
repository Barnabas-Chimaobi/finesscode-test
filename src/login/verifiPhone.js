import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const VerifyPhone = (props) => {
  const [otp, setOtp] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // function to register a phone number
  const verifyPhone = async () => {
    const reqBody = {
      phoneNumber: phoneNumber,
      otp: otp,
    };
    try {
      const phone = await fetch(
        'http://ec2-18-191-247-251.us-east-2.compute.amazonaws.com:5000/api/v1/auth/verify-phoneNumber',
        {
          method: 'POST',
          headers: {
            // Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reqBody),
        },
      );
      const verifyPhone = await phone.json();
      props.navigation.navigate('Login');
      console.log(verifyPhone, 'PHONEVERIFY');
    } catch (err) {
      console.log(err, 'ERRRRRRRRR');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={{height: '70%'}}>
            <View>
              <Text style={styles.getStarted}>COMFIRM PHONE NUMBER</Text>
              <Text style={styles.create}>
                please confirm phone number to continue
              </Text>
            </View>
            <Text style={styles.fullname}>Phone Number</Text>

            <View style={styles.emailView}>
              <View style={styles.textInputWrapper}>
                <TextInput
                  style={styles.textInput1}
                  onChangeText={(text) => setPhoneNumber(text)}
                  placeholder="123456"
                  clearTextOnFocus={true}
                />
                <MaterialIcon
                  style={{
                    color: 'gray',
                    fontSize: 23,
                    marginTop: -10,
                    paddingRight: 5,
                  }}
                  name="call-end"
                />
              </View>
            </View>

            <Text style={styles.fullname}>OTP</Text>

            <View style={styles.emailView}>
              <View style={styles.textInputWrapper}>
                <TextInput
                  style={styles.textInput1}
                  onChangeText={(text) => setOtp(text)}
                  placeholder="123456"
                  clearTextOnFocus={true}
                />
                <MaterialIcon
                  style={{
                    color: 'gray',
                    fontSize: 23,
                    marginTop: -10,
                    paddingRight: 5,
                  }}
                  name="call-end"
                />
              </View>
            </View>

            <Text style={styles.forgot}>Didn't get Otp?</Text>
            <View style={styles.termsView}>
              <Image source={require('../assets/checkk.png')} />
              <View style={styles.terms1}>
                <TouchableWithoutFeedback
                  onPress={() => props.navigation.navigate('Register')}>
                  <Text style={styles.terms}>Click to to resend</Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
            <View style={styles.button}>
              <TouchableWithoutFeedback onPress={() => verifyPhone()}>
                <Text style={styles.buttontext}>Sign Up</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default VerifyPhone;

const styles = StyleSheet.create({
  view1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 65,
    // marginLeft: 20,
    // marginRight: 20,
    backgroundColor: '#E3F2FD',
    paddingTop: 40,
    paddingBottom: 100,
    padding: 20,
    // height: '15%',
  },

  signin: {
    color: '#1E90FF',
    fontSize: 15,
  },
  account: {
    fontSize: 15,
  },
  image: {
    marginTop: '-10%',
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
    // marginTop: 50,
    // marginLeft: 25,
    // marginRight: 20,
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
  textInputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'gray',
    marginBottom: 20,
    // paddingBottom: -10,

    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    height: 40,
    justifyContent: 'space-between',
    margin: '5%',
  },
  fullname: {
    marginLeft: '7%',
    marginBottom: 10,
    fontSize: 13,
    fontFamily: 'serif',
    fontWeight: 'bold',
    marginTop: '10%',
  },
  container: {
    flex: 1,
  },
});
