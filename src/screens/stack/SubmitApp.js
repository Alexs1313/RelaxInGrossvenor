import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import GoBackBtn from '../../components/GoBackBtn';
import ButtonMain from '../../components/ButtonMain';
import {allProducts} from '../../data/allProducts';

const SubmitApp = () => {
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
          <Text style={styles.title}>Submit application</Text>
        </View>
      </SafeAreaView>

      <View style={{marginHorizontal: 16}}>
        <Text style={styles.productTitle}>Add information about you</Text>
        <Text style={styles.inputTitle}>Your name</Text>
        <TextInput placeholder="Task name" style={styles.input} />

        <Text style={styles.inputTitle}>Your phone number</Text>
        <TextInput placeholder="Task name" style={styles.input} />
      </View>

      <View style={styles.footer}>
        <ButtonMain text={'Offer'} navigateTo={'Application'} />
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
  input: {
    backgroundColor: '#312C52',
    borderRadius: 16,
    paddingLeft: 20,
    paddingRight: 20,
    height: 52,
    fontSize: 17,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  inputTitle: {
    fontWeight: '400',
    fontSize: 17,
    color: '#fff',
    marginLeft: 12,
    marginBottom: 8,
    marginTop: 24,
  },
  productTitle: {
    fontWeight: '700',
    fontSize: 23,
    color: '#fff',
    paddingBottom: 4,
    marginTop: 24,
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

export default SubmitApp;
