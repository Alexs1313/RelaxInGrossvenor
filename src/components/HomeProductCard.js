import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const HomeProductCard = ({prod}) => {
  const [iconColor, setIconColor] = useState(false);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    renderFavorites(prod);
  }, [isFocused]);

  const addToFavorites = async item => {
    try {
      setIconColor(true);

      const jsonValue = await AsyncStorage.getItem('@favorites');
      let favoritesList = jsonValue != null ? JSON.parse(jsonValue) : [];

      const filtered = favoritesList.find(val => val.id === item.id);

      if (!filtered) {
        favoritesList.push(item);
      }

      await AsyncStorage.setItem('@favorites', JSON.stringify(favoritesList));
    } catch (e) {
      console.error('Failed to add item to favorites:', e);
    }
  };

  const removeFavorites = async item => {
    setIconColor(false);
    const jsonValue = await AsyncStorage.getItem('@favorites');
    let favoritesList = jsonValue != null ? JSON.parse(jsonValue) : [];
    const filtered = favoritesList.filter(fav => fav.id !== item.id);
    await AsyncStorage.setItem('@favorites', JSON.stringify(filtered));
  };

  const renderFavorites = async item => {
    const jsonValue = await AsyncStorage.getItem('@favorites');
    const favoritesList = JSON.parse(jsonValue);

    if (favoritesList != null) {
      let data = favoritesList.find(fav => fav.id === item.id);

      return data == null ? setIconColor(false) : setIconColor(true);
    }
  };

  return (
    <Pressable
      onPress={() => navigation.navigate('ProductDetails', prod)}
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
        onPress={() =>
          iconColor ? removeFavorites(prod) : addToFavorites(prod)
        }
        activeOpacity={0.6}
        style={{position: 'absolute', right: 10, top: 10}}>
        {iconColor ? (
          <Image source={require('../assets/tabIcons/checkedHeart.png')} />
        ) : (
          <Image source={require('../assets/tabIcons/heartFill.png')} />
        )}
      </TouchableOpacity>
      <View>
        <Text style={styles.productTitle}>{prod.title}</Text>
        <Text style={styles.productDescription} numberOfLines={1}>
          {prod.description}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

export default HomeProductCard;
