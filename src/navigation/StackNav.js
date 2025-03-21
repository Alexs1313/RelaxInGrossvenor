import {createStackNavigator} from '@react-navigation/stack';

import TabNav from './TabNav';
import SofasCategory from '../screens/stack/SofasCategory';
import ChairsCategory from '../screens/stack/ChairsCategory';
import MassageChairCategory from '../screens/stack/MassageChairCategory';
import OfficeChairCategory from '../screens/stack/OfficeChairCategory';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="SofasCategory" component={SofasCategory} />
      <Stack.Screen name="ChairsCategory" component={ChairsCategory} />
      <Stack.Screen
        name="MassageChairCategory"
        component={MassageChairCategory}
      />
      <Stack.Screen
        name="OfficeChairCategory"
        component={OfficeChairCategory}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
