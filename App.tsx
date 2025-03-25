import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import StackNav from './src/navigation/StackNav';
import TabNav from './src/navigation/TabNav';
import Loader from './src/components/Loader';
import {useEffect, useState} from 'react';

const App = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      {!loader ? <Loader /> : <StackNav />}
    </NavigationContainer>
  );
};

export default App;
