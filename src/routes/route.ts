import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AppScreen from '../screens/AppScreen';
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';

const MainNavigator = createStackNavigator(
  {
    AppScreen: {screen: AppScreen},
    Home: {screen: HomeScreen},
    Detail: {screen: DetailScreen},
  },
  {
    initialRouteName: 'AppScreen',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
