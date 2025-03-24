import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GoBackBtn from '../../components/GoBackBtn';
import ButtonMain from '../../components/ButtonMain';
import {useNavigation} from '@react-navigation/native';

const Application = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 16,
            marginBottom: 10,
          }}>
          <GoBackBtn />
          <Text style={styles.title}>Application</Text>
        </View>
      </SafeAreaView>

      <View style={{alignItems: 'center', marginTop: 140}}>
        <Image source={require('../../assets/tabIcons/application.png')} />
        <Text style={styles.succsessText}>
          Application is successfully send, wait till manager contacts you
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabNav')}
          activeOpacity={0.7}
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
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C173D',
  },
  header: {
    backgroundColor: '#312C52',
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingTop: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    fontFamily: 'SF Pro',
    lineHeight: '100%',
    color: '#fff',
    padding: 16,
  },
  succsessText: {
    fontSize: 16,
    fontWeight: '800',
    fontFamily: 'SF Pro',
    lineHeight: '100%',
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 45,
    marginTop: 50,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#312C52',
    width: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: 115,
  },
});

export default Application;
