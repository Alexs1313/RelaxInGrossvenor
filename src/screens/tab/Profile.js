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

import {useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [image, setImage] = useState('');

  const [save, setSave] = useState(false);
  const [changePhoto, setChangePhoto] = useState(false);

  let options = {
    storageOptions: {
      path: 'image',
      maxHeight: 600,
      maxWidth: 600,
    },
  };

  const imagePicker = () => {
    launchImageLibrary(options, response => {
      if (response.didCancel) return;
      setImage(response.assets[0].uri);
      console.log(response.assets[0]);
      console.log();

      setChangePhoto(true);
      console.log('res', response);
    });
  };

  const allFieldsCompleted =
    name.trim() === '' ||
    number.trim() === '' ||
    age.trim() === '' ||
    height.trim() === '' ||
    weight.trim() === '' ||
    image === '';

  const saveData = async () => {
    setSave(true);

    const newData = {
      name,
      number,
      age,
      height,
      weight,
      image,
    };

    try {
      await AsyncStorage.setItem('formData', JSON.stringify(newData));
      console.log('saved', newData);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('formData');
        const parsed = JSON.parse(savedData);
        console.log('parsed', parsed);
        setName(parsed.name);
        setNumber(parsed.number);
        setAge(parsed.age);
        setHeight(parsed.height);
        setWeight(parsed.weight);
        setImage(parsed.image);
        setChangePhoto(true);
        if (parsed != null) {
          setSave(true);
        }

        console.log('parcimg', parsed.image);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <View
          style={{
            alignItems: 'center',
            marginHorizontal: 16,
            marginBottom: 10,
          }}>
          <Text style={styles.title}>Profile</Text>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={{marginHorizontal: 16}}>
          {save && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 24,
              }}>
              <Image
                source={{uri: image}}
                style={{width: 88, height: 88, borderRadius: 100}}
              />
              <Text
                style={{
                  fontWeight: 800,
                  fontSize: 24,
                  color: '#fff',
                  marginLeft: 20,
                }}>
                {name}
              </Text>
            </View>
          )}

          {!save && (
            <View>
              <View style={{alignItems: 'center', marginTop: 34}}>
                <TouchableOpacity
                  disabled={image !== ''}
                  onPress={() => imagePicker()}
                  style={{
                    width: 88,
                    height: 88,
                    backgroundColor: '#00CD70',
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {changePhoto ? (
                    <View>
                      <Image
                        source={{uri: image}}
                        style={{width: 88, height: 88, borderRadius: 100}}
                      />
                      <TouchableOpacity
                        onPress={() => {
                          setImage('');
                          setChangePhoto(false);
                        }}
                        activeOpacity={0.7}
                        style={{position: 'absolute', right: -15, top: -5}}>
                        <Image
                          source={require('../../assets/tabIcons/delete.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <Image source={require('../../assets/tabIcons/plus.png')} />
                  )}
                </TouchableOpacity>
              </View>
              <View style={{width: 20, height: 30}}></View>
              <Text style={styles.inputTitle}>Your name</Text>
              <View style={{justifyContent: 'center'}}>
                <TextInput
                  placeholder="Task name"
                  value={name}
                  placeholderTextColor={'#999999'}
                  style={styles.input}
                  onChangeText={setName}
                  maxLength={25}
                />
                {name !== '' && (
                  <TouchableOpacity
                    onPress={() => setName('')}
                    style={{position: 'absolute', right: 20}}>
                    <Image
                      source={require('../../assets/tabIcons/close.png')}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <Text style={styles.inputTitle}>Your phone number</Text>
              <View style={{justifyContent: 'center'}}>
                <TextInput
                  placeholder="Task name"
                  value={number}
                  placeholderTextColor={'#999999'}
                  style={styles.input}
                  onChangeText={setNumber}
                  inputMode="tel"
                />
                {number !== '' && (
                  <TouchableOpacity
                    onPress={() => setNumber('')}
                    style={{position: 'absolute', right: 20}}>
                    <Image
                      source={require('../../assets/tabIcons/close.png')}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={{
                  backgroundColor: '#312C52',
                  borderRadius: 24,
                  marginTop: 24,
                  padding: 16,
                }}>
                <Text style={styles.inputLabel}>
                  Some information about you
                </Text>
                <Text style={styles.inputTitle}>Your age</Text>
                <View style={{justifyContent: 'center'}}>
                  <TextInput
                    placeholder="Task name"
                    value={age}
                    placeholderTextColor={'#999999'}
                    style={styles.inputAbout}
                    onChangeText={setAge}
                    inputMode="numeric"
                  />
                  {age !== '' && (
                    <TouchableOpacity
                      onPress={() => setAge('')}
                      style={{position: 'absolute', right: 20}}>
                      <Image
                        source={require('../../assets/tabIcons/close.png')}
                      />
                    </TouchableOpacity>
                  )}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{width: '47%'}}>
                    <Text style={styles.inputTitle}>Height</Text>
                    <View style={{justifyContent: 'center'}}>
                      <TextInput
                        placeholder="Task name"
                        value={height}
                        placeholderTextColor={'#999999'}
                        style={styles.inputAbout}
                        onChangeText={setHeight}
                        inputMode="numeric"
                      />
                      {height !== '' && (
                        <TouchableOpacity
                          onPress={() => setHeight('')}
                          style={{position: 'absolute', right: 20}}>
                          <Image
                            source={require('../../assets/tabIcons/close.png')}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>

                  <View style={{width: '47%'}}>
                    <Text style={styles.inputTitle}>Weight</Text>
                    <View style={{justifyContent: 'center'}}>
                      <TextInput
                        placeholder="Task name"
                        value={weight}
                        placeholderTextColor={'#999999'}
                        style={styles.inputAbout}
                        onChangeText={setWeight}
                        inputMode="numeric"
                      />
                      {weight !== '' && (
                        <TouchableOpacity
                          onPress={() => setWeight('')}
                          style={{position: 'absolute', right: 20}}>
                          <Image
                            source={require('../../assets/tabIcons/close.png')}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}

          <View
            style={{
              backgroundColor: '#312C52',
              borderRadius: 24,
              marginTop: 24,
              padding: 16,
            }}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                justifyContent: 'center',
                borderBottomColor: 'rgba(153, 153, 153, 0.25)',
                borderBottomWidth: 1,
                marginBottom: 10,
                paddingVertical: 18,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 17,
                  fontWeight: '400',
                }}>
                Developer Website
              </Text>
              <Image
                source={require('../../assets/tabIcons/BackArr.png')}
                style={{position: 'absolute', right: 0}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                justifyContent: 'center',
                borderBottomColor: 'rgba(153, 153, 153, 0.25)',
                borderBottomWidth: 1,
                marginBottom: 10,
                paddingVertical: 18,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 17,
                  fontWeight: '400',
                }}>
                Terms of Use
              </Text>
              <Image
                source={require('../../assets/tabIcons/BackArr.png')}
                style={{position: 'absolute', right: 0}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                justifyContent: 'center',
                borderBottomColor: 'rgba(153, 153, 153, 0.25)',
                borderBottomWidth: 1,
                marginBottom: 10,
                paddingVertical: 18,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 17,
                  fontWeight: '400',
                }}>
                Privacy Policy
              </Text>
              <Image
                source={require('../../assets/tabIcons/BackArr.png')}
                style={{position: 'absolute', right: 0}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginBottom: 120}}>
          <TouchableOpacity
            disabled={allFieldsCompleted}
            onPress={() => {
              saveData();
              if (save) {
                setSave(false);
              }
            }}
            activeOpacity={0.7}
            style={{
              height: 50,
              marginHorizontal: 16,
              borderRadius: 16,
              marginTop: save ? 175 : 52,
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
              {save ? 'Edit information' : 'Save'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    paddingLeft: 20,
    paddingRight: 45,
    height: 52,
    fontSize: 17,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
  },
  inputAbout: {
    backgroundColor: '#453E6D',
    borderRadius: 16,
    paddingLeft: 20,
    paddingRight: 20,
    height: 52,
    fontSize: 17,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
  },
  inputTitle: {
    fontWeight: '400',
    fontSize: 17,
    color: '#fff',
    marginLeft: 12,
    marginBottom: 8,
    marginTop: 24,
  },
  inputLabel: {
    fontWeight: '700',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  productTitle: {
    fontWeight: '700',
    fontSize: 23,
    color: '#fff',
    paddingBottom: 4,
    marginTop: 24,
  },
});

export default Profile;
