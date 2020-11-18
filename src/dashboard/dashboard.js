import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  DrawerLayoutAndroid,
  TouchableWithoutFeedback,
  AsyncStorage,
} from 'react-native';
import Menu from '../login/login';

const Dashboard = () => {
  const [card, setCard] = useState('JASON MARTINS');
  const [amount, setAmount] = useState(['#207,050.00']);
  const [transaction, setTransaction] = useState(['Electricity']);
  let [dateofTransactiopn, setDateOfTransaction] = useState([]);
  let [transactionAmount, setTransactionAmount] = useState([]);

  //method for mounting component

  useEffect(() => {
    cardDetails();
  }, []);

  // handles action for opening android/menu drawer
  const openDrawer = () => {
    this.drawer.openDrawer();
  };

  // handles action for closing android/menu drawer
  const closeDrawer = () => {
    this.drawer.closeDrawer();
  };

  // handles action for notifications
  const notification = async () => {
    const notifiedEvent = await fetch('izkjon.com/api/notification');
    const receivedNotification = JSON.stringify(notifiedEvent);
    AsyncStorage.setItem('notification', receivedNotification);
    console.log(receivedNotification, 'RECEIVEDNOTIFICATION');
    props.navigation.navigate('Notification');
  };

  // function that action for displaying user's card details
  const cardDetails = async () => {
    const userCardDetails = await fetch('izkjon.com/api/cardDetails');
    const fetchedCardDetails = JSON.stringify(userCardDetails);
    setCard(fetchedCardDetails.name);
    setAmount(fetchedCardDetails.amount);
    set;
  };

  // method/function that routes to different services
  const services = async () => {
    props.navigation.navigate('navigateToRespectiveServices');
  };

  const transactions = async () => {
    const allTransactions = await fetch('izkjon.com/api/cardDetails');
    const fetchedTransactions = await JSON.stringify(allTransactions);
    const mapFetchedTransactions = fetchedTransactions.map((item) => {
      return item;
    });
    setTransaction(mapFetchedTransactions.transaction);
    setDateOfTransaction(mapFetchedTransactions.date);
    setAmount(mapFetchedTransactions.amount);
  };

  return (
    <DrawerLayoutAndroid
      drawerWidth={260}
      drawerPosition="left"
      renderNavigationView={(navigation) => (
        <Menu navigation={navigation} closeDrawer={closeDrawer} />
      )}
      ref={(_drawer) => {
        drawer = _drawer;
      }}>
      <View style={styles.maincontainer}>
        <ScrollView>
          <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => openDrawer}>
              <Image source={require('../assets/menu.png')} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => notification}>
              <Image source={require('../assets/notification.png')} />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.card}>
            <View style={styles.cardName}>
              <Text style={styles.name}>{card}</Text>
              <View style={styles.images}>
                <Image
                  style={styles.naira}
                  source={require('../assets/naira.png')}
                />
              </View>
            </View>
            <View style={styles.amount}>
              <Text style={styles.mainAmount}>{amount}</Text>
              <Text style={styles.wallet}>Wallet Balance</Text>
            </View>

            {/* <Image
              style={styles.frame}
              source={require('../assets/Frame.png')}
            /> */}
          </View>
          <Text style={styles.service}>Services</Text>

          <View style={styles.cardContainer}>
            <View style={styles.cards}>
              <TouchableWithoutFeedback onPress={() => services}>
                <View>
                  <Image
                    style={styles.cardimages}
                    source={require('../assets/electricity1.png')}
                  />

                  <Text style={styles.cardtest}>Electricity</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.cards}>
              <TouchableWithoutFeedback onPress={() => services}>
                <View>
                  <Image
                    style={styles.cardimages}
                    source={require('../assets/phone1.png')}
                  />
                  <Text style={styles.cardtest}>Airtime</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.cards}>
              <TouchableWithoutFeedback onPress={() => services}>
                <View>
                  <Image
                    style={styles.cardimages}
                    source={require('../assets/internet.png')}
                  />
                  <Text style={styles.cardtest}>Internet</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.cards}>
              <TouchableWithoutFeedback onPress={() => services}>
                <View>
                  <Image
                    style={styles.cardimages}
                    source={require('../assets/television.png')}
                  />
                  <Text style={styles.cardtest}>TV</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.cards}>
              <TouchableWithoutFeedback onPress={() => services}>
                <View>
                  <Image
                    style={styles.cardimages}
                    source={require('../assets/giftcards.png')}
                  />
                  <Text style={styles.cardtest}>Trade Gift Cards</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.cards}>
              <TouchableWithoutFeedback onPress={() => services}>
                <View>
                  <Image
                    style={styles.cardimages}
                    source={require('../assets/bitcoin.png')}
                  />
                  <Text style={styles.cardtest}>Trade Bitcoins</Text>
                </View>
              </TouchableWithoutFeedback>
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
                <Text style={styles.text1}>{transaction}</Text>
                <Text style={styles.text}>{dateofTransactiopn}</Text>
              </View>
            </View>

            <Text style={styles.text2}>{amount}</Text>
          </View>

          <View style={styles.transactionviews}>
            <View style={styles.transactionview1}>
              <Image
                style={styles.transactionimage}
                source={require('../assets/electricity1.png')}
              />
              <View style={styles.textview}>
                <Text style={styles.text1}>{transaction}</Text>
                <Text style={styles.text}>{dateofTransactiopn}</Text>
              </View>
            </View>

            <Text style={styles.text2}>{amount}</Text>
          </View>
          <View style={styles.transactionviews}>
            <View style={styles.transactionview1}>
              <Image
                style={styles.transactionimage}
                source={require('../assets/wallet.png')}
              />
              <View style={styles.textview}>
                <Text style={styles.text1}>{transaction}</Text>
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
    </DrawerLayoutAndroid>
  );
};

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
  card: {
    backgroundColor: '#1E88E5',
    height: 180,
    width: 292,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 15,
  },
  cardName: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
  },
  naira: {
    // marginTop: -15,
    borderWidth: 10,
    borderColor: 'rgba(144, 202, 249, 0.5)',
    borderRadius: 50,
  },
  name: {
    color: 'white',
  },
  images: {
    borderWidth: 20,
    borderRadius: 50,
    marginTop: -40,
    marginRight: -13,
    borderColor: 'rgba(144, 202, 249, 0.5)',
  },
  amount: {
    margin: 10,
  },
  mainAmount: {
    color: 'white',
    fontSize: 25,
  },
  wallet: {
    color: 'white',
    marginLeft: 30,
  },
});
