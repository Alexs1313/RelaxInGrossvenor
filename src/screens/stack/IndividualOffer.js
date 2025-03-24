import {
  Keyboard,
  Pressable,
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
import {allProducts} from '../../data/allProducts';
import ProductCard from '../../components/ProductCard';
import DropDownPicker from 'react-native-dropdown-picker';
import {useNavigation} from '@react-navigation/native';

const IndividualOffer = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [offer, setOffer] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const navigation = useNavigation();

  const [items, setItems] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ]);

  console.log('selectedQuantity', selectedQuantity);

  const allFieldsCompleted =
    gender.trim() === '' ||
    age.trim() === '' ||
    height.trim() === '' ||
    weight.trim() === '';

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
            <Text style={styles.title}>Individual offer</Text>
          </View>
        </SafeAreaView>

        <View style={{marginHorizontal: 16}}>
          <Text style={styles.productTitle}>
            {offer ? 'Recomendations for you ' : 'Submit application'}
          </Text>
          {!offer && (
            <View>
              <Text style={styles.inputTitle}>Your age</Text>
              <TextInput
                placeholder="Put information here"
                placeholderTextColor={'#999999'}
                style={styles.input}
                maxLength={3}
                inputMode="numeric"
                value={age}
                onChangeText={value => setAge(value)}
              />
              <Text style={styles.inputTitle}>Gender</Text>

              <View>
                <DropDownPicker
                  style={styles.inputPicker}
                  disableBorderRadius={true}
                  open={open}
                  labelStyle={{
                    color: '#fff',
                  }}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  theme="DARK"
                  placeholder={'Choose an option'}
                  placeholderTextColor={'#999999'}
                  textStyle={{fontWeight: '400', fontSize: 17}}
                  onChangeValue={value => setGender(value)}
                />
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: '47%'}}>
                  <Text style={styles.inputTitle}>Height</Text>
                  <TextInput
                    placeholder="Task name"
                    value={height}
                    placeholderTextColor={'#999999'}
                    style={styles.input}
                    inputMode="numeric"
                    maxLength={3}
                    onChangeText={value => setHeight(value)}
                  />
                </View>

                <View style={{width: '47%'}}>
                  <Text style={styles.inputTitle}>Weight</Text>
                  <TextInput
                    placeholder="Task name"
                    placeholderTextColor={'#999999'}
                    style={styles.input}
                    value={weight}
                    inputMode="numeric"
                    maxLength={3}
                    onChangeText={value => setWeight(value)}
                  />
                </View>
              </View>
            </View>
          )}
          {offer && (
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {allProducts.map(prod => (
                <ProductCard
                  prod={prod}
                  setSelectedQuantity={setSelectedQuantity}
                />
              ))}
            </View>
          )}
        </View>

        {offer ? (
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SubmitApp')}
              activeOpacity={0.7}
              style={{
                height: 50,
                marginHorizontal: 16,
                borderRadius: 16,
                marginTop: 16,
                backgroundColor:
                  selectedQuantity < 1 ? '#393158' : 'rgba(0, 205, 112, 1)',
                paddingHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color:
                    selectedQuantity < 1 ? '#999999' : 'rgba(16, 14, 27, 1)',
                  opacity: selectedQuantity < 1 ? 0.5 : null,
                  fontWeight: '700',
                  fontSize: 16,
                }}>
                {`Offer (${selectedQuantity})`}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.footer}>
            <TouchableOpacity
              disabled={allFieldsCompleted}
              onPress={() => setOffer(!offer)}
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
                {offer ? `Offer (${selectedQuantity})` : 'Offer'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
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
    paddingLeft: 20,
    paddingRight: 20,
    height: 52,
    fontSize: 17,
    fontWeight: '400',
    color: '#fff',
  },
  inputPicker: {
    backgroundColor: '#312C52',
    borderRadius: 16,
    paddingLeft: 20,
    paddingRight: 20,
    height: 52,
    fontSize: 17,
    fontWeight: '400',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#312C52',
  },
  inputTitle: {
    fontWeight: '400',
    fontSize: 17,
    color: '#fff',
    marginLeft: 12,
    marginBottom: 8,
    marginTop: 12,
  },
  productTitle: {
    fontWeight: '700',
    fontSize: 23,
    color: '#fff',
    paddingBottom: 4,
    marginTop: 24,
    marginBottom: 12,
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

  productListTitle: {
    fontWeight: '500',
    fontSize: 14,
    color: '#fff',
    paddingBottom: 4,
    paddingLeft: 8,
    marginTop: 8,
  },
  productDescription: {
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '400',
    fontSize: 12,
    opacity: 0.5,
    paddingLeft: 8,
    marginBottom: 10,
  },
});

export default IndividualOffer;
