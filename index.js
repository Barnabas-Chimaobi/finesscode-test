/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Splash from './src/splash/splash';
import Signup from './src/signup/signup';
import Login from './src/login/login';
import Dashboard from './src/dashboard/dashboard';
import AppContainer from './src/routes/appContainer';
import FORGOT from './src/forgotpassword/forgotpassword';
import appContainer from './src/routes/appContainer';
import UpdateProfile from './src/login/updateProfile';
import Reset from './src/forgotpassword/resetPassword';

AppRegistry.registerComponent(appName, () => AppContainer);