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

const ProductDetails = ({route}) => {
  const prod = route.params;
  console.log(prod);

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
          <Text style={styles.title}>Product</Text>
        </View>
      </SafeAreaView>

      <ScrollView>
        <View style={{marginHorizontal: 16, marginTop: 17}}>
          <Image
            source={prod.image}
            style={{width: '100%', height: 300, borderRadius: 24}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 16,
            marginTop: 21,
          }}>
          <Text style={styles.productTitle}>{prod.title}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}>
            <TouchableOpacity activeOpacity={0.7} style={styles.btnContainer}>
              <Image source={require('../../assets/tabIcons/share.png')} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.btnContainer}>
              <Image source={require('../../assets/tabIcons/greenHeart.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginHorizontal: 16}}>
          <Text style={styles.descriptionText}>Description</Text>
          <Text style={styles.productDescriptionText}>{prod.description}</Text>
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
      </ScrollView>
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
  catalogText: {
    fontWeight: '700',
    fontSize: 24,
    color: '#fff',
    marginHorizontal: 16,
    marginBottom: 7,
    marginTop: 24,
  },
  input: {
    backgroundColor: '#453E6D',
    borderRadius: 16,
    paddingLeft: 47,
    height: 52,
    fontSize: 17,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  productTitle: {
    fontWeight: '700',
    fontSize: 20,
    color: '#fff',
    paddingBottom: 4,
  },
  productDescriptionText: {
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '400',
    fontSize: 12,
    marginTop: 6,
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

export default ProductDetails;
