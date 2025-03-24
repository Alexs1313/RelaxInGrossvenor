import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MouseButton, TextInput} from 'react-native-gesture-handler';
import {allProducts} from '../../data/allProducts';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ButtonMain from '../../components/ButtonMain';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const catalog = [
  {id: 1, image: require('../../assets/catalog/sofas.png'), title: 'Sofas'},
  {id: 2, image: require('../../assets/catalog/chairs.png'), title: 'Chairs'},
  {
    id: 3,
    image: require('../../assets/catalog/massageChairs.png'),
    title: 'Massage chairs',
  },
  {
    id: 4,
    image: require('../../assets/catalog/officeChair.png'),
    title: 'Office chairs',
  },
];

const Home = () => {
  const navigation = useNavigation();
  const [filter, setFilter] = useState(allProducts);

  const handleFilter = e => {
    setFilter(
      allProducts.filter(product =>
        product.title.toLowerCase().includes(e.toLowerCase()),
      ),
    );
  };

  const handlePressCategory = item => {
    if (item === 1) {
      navigation.navigate('SofasCategory');
    } else if (item === 2) {
      navigation.navigate('ChairsCategory');
    } else if (item === 3) {
      navigation.navigate('MassageChairCategory');
    } else {
      navigation.navigate('OfficeChairCategory');
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.title}>Grossveron Sofas</Text>
        <View
          style={{
            marginHorizontal: 16,
            paddingBottom: 24,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextInput
              placeholder="Search"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              style={styles.input}
              onChangeText={event => handleFilter(event)}
            />
            <Image
              style={{position: 'absolute', left: 20, top: 17}}
              source={require('../../assets/tabIcons/search.png')}
            />
            <View style={styles.heartIcon}>
              <Image
                source={require('../../assets/tabIcons/heart.png')}
                style={{}}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView style={{marginBottom: 100}}>
        <Text style={styles.catalogText}>Catalog</Text>

        <View
          style={{
            marginHorizontal: 16,
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {catalog.map(item => (
            <Pressable
              key={item.id}
              onPress={() => handlePressCategory(item.id)}
              style={{
                backgroundColor: '#312C52',
                marginBottom: 10,
                width: '48%',
                borderRadius: 12,
                paddingLeft: 12,
                height: 200,
                justifyContent: 'center',
              }}>
              <Image
                source={item.image}
                style={{
                  borderRadius: 12,
                }}
              />

              <Text style={styles.cardTitle}>{item.title}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.catalogText}>All Products</Text>
        <View
          style={{
            marginHorizontal: 16,
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {allProducts.map(prod => (
            <View
              key={prod.id}
              style={{
                width: '48%',
                alignItems: 'center',
              }}>
              <Image
                source={prod.image}
                style={{width: '100%', borderRadius: 16, height: 180}}
              />

              <TouchableOpacity
                activeOpacity={0.6}
                style={{position: 'absolute', right: 10, top: 10}}>
                <Image
                  source={require('../../assets/tabIcons/heartFill.png')}
                />
              </TouchableOpacity>
              <View>
                <Text style={styles.productTitle}>{prod.title}</Text>
                <Text style={styles.productDescription} numberOfLines={1}>
                  {prod.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View style={{marginBottom: 20}}>
          <ButtonMain
            text={'Select individually'}
            navigateTo={'IndividualOffer'}
          />
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
  input: {
    backgroundColor: '#453E6D',
    borderRadius: 16,
    paddingLeft: 47,
    height: 52,
    fontSize: 17,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.5)',
    width: '80%',
  },
  heartIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#453E6D',
    // marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  catalogText: {
    fontWeight: '700',
    fontSize: 24,
    color: '#fff',
    marginHorizontal: 16,
    marginBottom: 7,
    marginTop: 24,
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
    paddingTop: 4,
  },
  productTitle: {
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

export default Home;
