import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const GoBackBtn = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.goBack()}
      style={{
        width: 52,
        height: 52,
        backgroundColor: '#453E6D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
      }}>
      <Image source={require('../assets/tabIcons/backArrow.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default GoBackBtn;
