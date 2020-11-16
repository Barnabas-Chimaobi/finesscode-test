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

AppRegistry.registerComponent(appName, () => Dashboard);