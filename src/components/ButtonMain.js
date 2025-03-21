import {Text, TouchableOpacity} from 'react-native';

const ButtonMain = ({text}) => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        marginHorizontal: 16,
        borderRadius: 16,
        marginTop: 16,
        backgroundColor: 'rgba(0, 205, 112, 1)',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'rgba(16, 14, 27, 1)',
          fontWeight: '700',
          fontSize: 16,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonMain;
