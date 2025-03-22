import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import GoBackBtn from '../../components/GoBackBtn';
import ButtonMain from '../../components/ButtonMain';

const Application = () => {
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
        <ButtonMain text={'Offer'} />
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
