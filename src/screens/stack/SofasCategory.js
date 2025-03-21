import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonMain from '../../components/ButtonMain';
import {allProducts} from '../../data/allProducts';
import {useState} from 'react';

const SofasCategory = () => {
  const [filter, setFilter] = useState(
    allProducts.filter(product => product.category === 'Sofas'),
  );

  const handleFilter = e => {
    setFilter(
      filteredProducts.filter(product =>
        product.title.toLowerCase().includes(e.toLowerCase()),
      ),
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.title}>Sofas</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 15,
          }}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            style={styles.input}
            onChangeText={event => handleFilter(event)}
          />
          <Image
            style={{position: 'absolute', left: 35, top: 17}}
            source={require('../../assets/tabIcons/search.png')}
          />
        </View>
      </SafeAreaView>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginHorizontal: 16,
        }}>
        {filter.map(prod => (
          <View key={prod.id} style={{width: '48%'}}>
            <Image source={prod.image} />
            <Text style={styles.productTitle}>{prod.title}</Text>

            <Text style={styles.productDescription} numberOfLines={1}>
              {prod.description}
            </Text>
          </View>
        ))}
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#312C52',
          width: '100%',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          height: 115,
        }}>
        <ButtonMain text={'Select individually'} />
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
    marginBottom: 23,
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
    width: '92%',
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

export default SofasCategory;
