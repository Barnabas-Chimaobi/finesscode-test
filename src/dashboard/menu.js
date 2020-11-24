//Menu.js
// /components/Menu.js
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Menu = (props) => {
  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      //   style={styles.imageBackground}
      source={require('../assets/Drawer.png')}>
      <View style={styles.Menucontainer}>
        <View style={{backgroundColor: '#17732B'}}>
          {/* <Image style={styles.profileImage} source={{uri: ImageFileUrl}} /> */}
          <Text
            style={{
              alignSelf: 'flex-start',
              marginTop: 10,
              color: 'white',
              marginLeft: 20,
              fontFamily: 'sans-serif-condensed',
              fontSize: 15,
            }}>
            Jason Martins
          </Text>

          <Text
            style={{
              alignSelf: 'flex-start',
              margin: 5,
              color: 'white',
              marginLeft: 20,
              borderWidth: 1,
              borderColor: '#CA9818',
              backgroundColor: '#CA9818',
              padding: 5,
              borderRadius: 5,
              marginBottom: 20,
              fontFamily: 'sans-serif-condensed',
              fontSize: 15,
            }}>
            {/* {MatricNumber} */}
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'green',
            width: '100%',
            marginBottom: 5,
          }}
        />
        <View style={styles.board}>
          <View style={styles.eachIcon}>
            <MaterialIcons
              name="person"
              size={20}
              color="green"
              style={styles.icon}
            />
            <Text style={styles.boardText}>Airtime Top-Up</Text>
          </View>

          <View style={styles.eachIcon}>
            <MaterialIcons
              name="notifications"
              size={20}
              color="green"
              style={styles.icon}
            />
            <Text style={styles.boardText}>Buy Data</Text>
          </View>

          <View style={styles.eachIcon}>
            <MaterialIcons
              name="contact-mail"
              size={20}
              color="green"
              style={styles.icon}
            />
            <Text style={styles.boardText}>Tv Subscription</Text>
          </View>

          <View style={styles.eachIcon}>
            <MaterialIcons
              name="contact-mail"
              size={20}
              color="green"
              style={styles.icon}
            />
            <Text style={styles.boardText}>Electricity</Text>
          </View>

          <View style={styles.eachIcon}>
            <MaterialIcons
              name="contact-mail"
              size={20}
              color="green"
              style={styles.icon}
            />
            <Text style={styles.boardText}>Rates</Text>
          </View>

          <View style={styles.eachIcon}>
            <MaterialIcons
              name="contact-mail"
              size={20}
              color="green"
              style={styles.icon}
            />
            <Text style={styles.boardText}>Trade BTC</Text>
          </View>

          <View style={styles.eachIcon}>
            <MaterialIcons
              name="contact-mail"
              size={20}
              color="green"
              style={styles.icon}
            />
            <Text style={styles.boardText}>Trade Gift Cards</Text>
          </View>

          <View style={styles.eachIcon}>
            <MaterialIcons
              name="contact-mail"
              size={20}
              color="green"
              style={styles.icon}
            />
            <Text style={styles.boardText}>Wallet</Text>
          </View>

          <View style={styles.eachIcon}>
            <MaterialIcons
              name="vpn-key"
              size={20}
              color="green"
              style={styles.icon}
            />
            <Text style={styles.boardText}>Sign Out</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Menu;

const styles = StyleSheet.create({
  Menucontainer: {
    flex: 1,
    backgroundColor: 'rgba(33, 33, 33, 0.85)',
  },
  board: {
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: 'white',
    borderStyle: 'solid',
    height: 450,
    width: 350,
  },
  boardText: {
    fontSize: 13,
    marginLeft: 20,
    marginTop: -20,
    marginLeft: 70,
    color: 'white',
  },
  icon: {
    marginTop: 2,
    marginLeft: 20,
  },
  eachIcon: {
    borderBottomColor: 'lightgrey',
    paddingBottom: 7,
    marginTop: 20,
  },
  profileImage: {
    height: 120,
    width: 120,
    borderColor: '#28EB53',
    alignSelf: 'flex-start',
    borderWidth: 3,
    borderRadius: 100,
    marginTop: 40,
    marginLeft: 15,
  },
});
