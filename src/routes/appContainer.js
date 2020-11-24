import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Splash from '../splash/splash';
import Register from '../signup/signup';
import Login from '../login/login';
import VerifyPhone from '../login/verifiPhone';
import Dashboard from '../dashboard/dashboard';
import ForgotPassword from '../forgotpassword/forgotpassword';
import ResetPassword from '../forgotpassword/resetPassword';
const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        headerBackground: 'red',
      },
    },
    Register,
    Login,
    VerifyPhone,
    Dashboard,
    ForgotPassword,
    ResetPassword,
  },

  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  },
);

const appContainer = createAppContainer(AppNavigator);

export default appContainer;
