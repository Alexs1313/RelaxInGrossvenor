import {createStackNavigator} from '@react-navigation/stack';

import TabNav from './TabNav';
import SofasCategory from '../screens/stack/SofasCategory';
import ChairsCategory from '../screens/stack/ChairsCategory';
import MassageChairCategory from '../screens/stack/MassageChairCategory';
import OfficeChairCategory from '../screens/stack/OfficeChairCategory';
import ProductDetails from '../screens/stack/ProductDetails';
import IndividualOffer from '../screens/stack/IndividualOffer';
import SubmitApp from '../screens/stack/SubmitApp';
import Application from '../screens/stack/Application';
import ArticleDetails from '../screens/stack/ArticleDetails';
import BackTrain from '../screens/stack/BackTrain';
import LegsTrain from '../screens/stack/LegsTrain';
import ShouldersTrain from '../screens/stack/ShouldersTrain';

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
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="IndividualOffer" component={IndividualOffer} />
      <Stack.Screen name="SubmitApp" component={SubmitApp} />
      <Stack.Screen name="Application" component={Application} />
      <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
      <Stack.Screen name="BackTrain" component={BackTrain} />
      <Stack.Screen name="LegsTrain" component={LegsTrain} />
      <Stack.Screen name="ShouldersTrain" component={ShouldersTrain} />
    </Stack.Navigator>
  );
};

export default StackNav;
