import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ProductCard = ({prod, setSelectedQuantity}) => {
  const [selectedProduct, setSelectedProduct] = useState(false);

  return (
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
        <Image source={require('../assets/tabIcons/heartFill.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelectedProduct(true);
          if (!selectedProduct) {
            setSelectedQuantity(prev => prev + 1);
          }
        }}
        activeOpacity={0.6}
        style={{position: 'absolute', left: 10, top: 10}}>
        {selectedProduct ? (
          <Image source={require('../assets/tabIcons/checkbox.png')} />
        ) : (
          <Image source={require('../assets/tabIcons/checkboxEmpty.png')} />
        )}
      </TouchableOpacity>
      <View>
        <Text style={styles.productListTitle}>{prod.title}</Text>
        <Text style={styles.productDescription} numberOfLines={1}>
          {prod.description}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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

  productListTitle: {
    fontWeight: '500',
    fontSize: 14,
    color: '#fff',
    paddingBottom: 4,
    paddingLeft: 8,
    marginTop: 8,
  },
});

export default ProductCard;
