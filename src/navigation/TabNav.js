import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, View} from 'react-native';
import Home from '../screens/tab/Home';
import Diary from '../screens/tab/Diary';
import Practices from '../screens/tab/Practices';
import Profile from '../screens/tab/Profile';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: '#00CD70',
        tabBarInactiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/tabIcons/home.png')}
              style={{tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Practices"
        component={Practices}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/tabIcons/practices.png')}
              style={{tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Diary"
        component={Diary}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/tabIcons/diary.png')}
              style={{tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/tabIcons/profile.png')}
              style={{tintColor: color}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#312C52',
    borderTopWidth: 0,
    height: 110,
    paddingBottom: 5,
    paddingTop: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tabBarLabelStyle: {
    marginTop: 8,
    fontSize: 10,
    fontWeight: '600',
  },
});

export default TabNav;
