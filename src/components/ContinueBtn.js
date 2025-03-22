import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const ContinueBtn = ({handleNextTrain}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => handleNextTrain()}
      style={{
        width: 52,
        height: 52,
        backgroundColor: '#453E6D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
      }}>
      <Image source={require('../assets/tabIcons/arrow.png')} />
    </TouchableOpacity>
  );
};

export default ContinueBtn;
