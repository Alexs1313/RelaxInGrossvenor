import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import GoBackBtn from '../../components/GoBackBtn';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const SubmitApp = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const navigation = useNavigation();

  const allFieldsCompleted = name.trim() === '' || number.trim() === '';

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
          <TextInput
            placeholder="Task name"
            placeholderTextColor={'#999999'}
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.inputTitle}>Your phone number</Text>
          <TextInput
            placeholder="Task name"
            placeholderTextColor={'#999999'}
            style={styles.input}
            value={number}
            onChangeText={setNumber}
            inputMode="numeric"
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            disabled={allFieldsCompleted}
            onPress={() => navigation.navigate('Application')}
            activeOpacity={0.7}
            style={{
              height: 50,
              marginHorizontal: 16,
              borderRadius: 16,
              marginTop: 16,
              backgroundColor: allFieldsCompleted
                ? '#393158'
                : 'rgba(0, 205, 112, 1)',
              paddingHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: allFieldsCompleted ? '#999999' : 'rgba(16, 14, 27, 1)',
                opacity: allFieldsCompleted ? 0.5 : null,
                fontWeight: '700',
                fontSize: 16,
              }}>
              Offer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    color: '#FFFFFF',
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
