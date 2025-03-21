import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import StackNav from './src/navigation/StackNav';
import TabNav from './src/navigation/TabNav';

const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default App;
