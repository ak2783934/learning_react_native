import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreens from './src/screens/ImageScreens';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SqareScreen from './src/screens/SqareScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Screen: ComponentScreen,
    List: ListScreen,
    Image: ImageScreens,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SqareScreen,
  },
  {
    initialRouteName: 'Home',

    defaultNavigationOptions: {
      title: 'My App',
      headerTitleAlign: 'center',
    },
  }
);

export default createAppContainer(navigator);
