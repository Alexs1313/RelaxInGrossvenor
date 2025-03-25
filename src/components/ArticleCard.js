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

const ArticleCard = ({article}) => {
  const navigation = useNavigation();
  const [iconColor, setIconColor] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    renderFavorites(article);
  }, [isFocused]);

  const addToFavorites = async item => {
    try {
      setIconColor(true);

      const jsonValue = await AsyncStorage.getItem('@favoritesArticle');
      let favoritesList = jsonValue !== null ? JSON.parse(jsonValue) : [];

      const filtered = favoritesList.find(val => val.id === item.id);

      if (!filtered) {
        favoritesList.push(item);
      }

      await AsyncStorage.setItem(
        '@favoritesArticle',
        JSON.stringify(favoritesList),
      );
    } catch (e) {
      console.error('Failed to add item to favorites:', e);
    }
  };

  const removeFavorites = async item => {
    setIconColor(false);
    const jsonValue = await AsyncStorage.getItem('@favoritesArticle');
    let favoritesList = jsonValue != null ? JSON.parse(jsonValue) : [];
    const filtered = favoritesList.filter(fav => fav.id !== item.id);
    await AsyncStorage.setItem('@favoritesArticle', JSON.stringify(filtered));
  };

  const renderFavorites = async item => {
    const jsonValue = await AsyncStorage.getItem('@favoritesArticle');
    const favoritesList = JSON.parse(jsonValue);

    if (favoritesList != null) {
      let data = favoritesList.find(fav => fav.id === item.id);

      return data == null ? setIconColor(false) : setIconColor(true);
    }
  };
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('ArticleDetails', article)}>
        <Image
          source={article.image}
          style={{width: '100%', height: 180, borderRadius: 16}}
        />
      </Pressable>

      <TouchableOpacity
        onPress={() =>
          iconColor ? removeFavorites(article) : addToFavorites(article)
        }
        activeOpacity={0.6}
        style={{position: 'absolute', right: 10, top: 10}}>
        {iconColor ? (
          <Image source={require('../assets/tabIcons/checkedHeart.png')} />
        ) : (
          <Image source={require('../assets/tabIcons/heartFill.png')} />
        )}
      </TouchableOpacity>
      <Text style={styles.articleTitle}>{article.title}</Text>
      <Text numberOfLines={1} style={styles.articleDescription}>
        {article.description}
      </Text>
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
    color: '#fff',
    padding: 16,
  },
  heartIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#453E6D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginTop: 27,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  cardContainer: {
    backgroundColor: '#312C52',
    height: 200,
    width: 170,
    paddingTop: 10,
    borderRadius: 12,
    paddingLeft: 15,
    marginRight: 12,
  },
  articleTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginTop: 12,
    marginBottom: 8,
  },
  articleDescription: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 24,
  },
});

export default ArticleCard;
