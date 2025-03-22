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

const IndividualOffer = () => {
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
          <Text style={styles.title}>Individual offer</Text>
        </View>
      </SafeAreaView>

      <View style={{marginHorizontal: 16}}>
        <Text style={styles.productTitle}>Submit application</Text>
        <Text style={styles.inputTitle}>Your age</Text>
        <TextInput placeholder="Put information here" style={styles.input} />

        <Text style={styles.inputTitle}>Gender</Text>
        <TextInput placeholder="Choose an option" style={styles.input} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: '47%'}}>
            <Text style={styles.inputTitle}>Height</Text>
            <TextInput placeholder="Task name" style={styles.input} />
          </View>

          <View style={{width: '47%'}}>
            <Text style={styles.inputTitle}>Weight</Text>
            <TextInput placeholder="Task name" style={styles.input} />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <ButtonMain text={'Offer'} navigateTo={'SubmitApp'} />
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
  catalogText: {
    fontWeight: '700',
    fontSize: 24,
    color: '#fff',
    marginHorizontal: 16,
    marginBottom: 7,
    marginTop: 24,
  },
  input: {
    backgroundColor: '#312C52',
    borderRadius: 16,
    padding: 20,
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

  productDescription: {
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '400',
    fontSize: 12,
    opacity: 0.5,
    paddingLeft: 8,
    marginBottom: 10,
  },
  descriptionText: {
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#453E6D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
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

export default IndividualOffer;
