import {useEffect} from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Loader = () => {
  const spinValue = new Animated.Value(0);
  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => spin());
  };

  useEffect(() => {
    spin();
  }, []);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#fff',
          fontWeight: '700',
          fontSize: 32,
          marginBottom: 60,
        }}>
        Relax in Grossvenor
      </Text>
      <Animated.View style={{transform: [{rotate}]}}>
        <Image source={require('../assets/tabIcons/loader.png')} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C173D',
  },
});

export default Loader;
