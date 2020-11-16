import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.maincontainer}>
        <ScrollView>
          <View style={styles.container}>
            <Image source={require('../assets/menu.png')} />
            <Image source={require('../assets/notification.png')} />
          </View>
          <View>
            <Image
              style={styles.frame}
              source={require('../assets/Frame.png')}
            />
          </View>
          <Text style={styles.service}>Services</Text>

          <View style={styles.cardContainer}>
            <View style={styles.cards}>
              <Image
                style={styles.cardimages}
                source={require('../assets/electricity1.png')}
              />
              <Text style={styles.cardtest}>Electricity</Text>
            </View>
            <View style={styles.cards}>
              <Image
                style={styles.cardimages}
                source={require('../assets/phone1.png')}
              />
              <Text style={styles.cardtest}>Airtime</Text>
            </View>
            <View style={styles.cards}>
              <Image
                style={styles.cardimages}
                source={require('../assets/internet.png')}
              />
              <Text style={styles.cardtest}>Internet</Text>
            </View>
            <View style={styles.cards}>
              <Image
                style={styles.cardimages}
                source={require('../assets/television.png')}
              />
              <Text style={styles.cardtest}>TV</Text>
            </View>
            <View style={styles.cards}>
              <Image
                style={styles.cardimages}
                source={require('../assets/giftcards.png')}
              />
              <Text style={styles.cardtest}>Trade Gift Cards</Text>
            </View>
            <View style={styles.cards}>
              <Image
                style={styles.cardimages}
                source={require('../assets/bitcoin.png')}
              />
              <Text style={styles.cardtest}>Trade Bitcoins</Text>
            </View>
            <Image style={styles.line} source={require('../assets/Line.png')} />
          </View>
          <Text style={styles.transactiontext}>Transactions</Text>
          <View style={styles.transactionview}>
            <View style={styles.transactionview1}>
              <Image
                style={styles.transactionimage}
                source={require('../assets/internet.png')}
              />
              <View style={styles.textview}>
                <Text style={styles.text1}>Internet</Text>
                <Text style={styles.text}>30 July, 2020</Text>
              </View>
            </View>

            <Text style={styles.text2}>-#13,000.00</Text>
          </View>

          <View style={styles.transactionviews}>
            <View style={styles.transactionview1}>
              <Image
                style={styles.transactionimage}
                source={require('../assets/electricity1.png')}
              />
              <View style={styles.textview}>
                <Text style={styles.text1}>Electricity</Text>
                <Text style={styles.text}>30 July, 2020</Text>
              </View>
            </View>

            <Text style={styles.text2}>-#13,000.00</Text>
          </View>
          <View style={styles.transactionviews}>
            <View style={styles.transactionview1}>
              <Image
                style={styles.transactionimage}
                source={require('../assets/wallet.png')}
              />
              <View style={styles.textview}>
                <Text style={styles.text1}>Wallet Top UP</Text>
                <Text style={styles.text}>30 July, 2020</Text>
              </View>
            </View>

            <Text style={styles.text3}>-#140,000.00</Text>
          </View>
        </ScrollView>
        <View style={styles.footernav}>
          <View style={styles.imageview}>
            <Image
              style={styles.homeimage}
              source={require('../assets/homes.png')}
            />
            <Text style={styles.home}>Home</Text>
          </View>
          <Image
            style={styles.image}
            source={require('../assets/wallets.png')}
          />
          <Image style={styles.trade} source={require('../assets/trade.png')} />
          <Image style={styles.image} source={require('../assets/rates.png')} />
          <Image
            style={styles.image}
            source={require('../assets/profile.png')}
          />
        </View>
      </View>
    );
  }
}

export default Dashboard;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
  },
  frame: {
    marginTop: 25,
    marginLeft: 19,
    alignSelf: 'center',
  },
  service: {
    marginLeft: 25,
    marginTop: 10,
    fontWeight: 'bold',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  cards: {
    margin: 14,
  },
  cardimages: {
    height: 69,
    width: 69,
  },
  cardtest: {
    fontSize: 11,
    textAlign: 'center',
    width: 60,
  },
  line: {
    marginLeft: 16,
    width: 360,
  },
  transactionview: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    elevation: 10,
    backgroundColor: 'white',
    height: 60,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
  },
  transactionviews: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    elevation: 10,
    backgroundColor: 'white',
    height: 60,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
  },

  transactiontext: {
    margin: 20,
    fontWeight: 'bold',
  },
  transactionimage: {
    height: 45,
    width: 45,
  },
  transactionview1: {
    display: 'flex',
    flexDirection: 'row',
  },
  textview: {
    marginLeft: 16,
    marginTop: 5,
  },
  text1: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 11,
    color: '#9E9E9E',
  },
  text2: {
    color: '#F44336',
    paddingTop: 10,
  },
  text3: {
    color: 'green',
    paddingTop: 10,
  },
  footernav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    height: 75,
    backgroundColor: '#EEEEEE',
  },
  trade: {
    paddingTop: 0,
  },
  imageview: {
    paddingTop: 20,
  },
  image: {
    marginTop: 20,
  },
  home: {
    color: '#1565C0',
    fontSize: 12,
  },
  homeimage: {
    marginLeft: 3,
  },
});
