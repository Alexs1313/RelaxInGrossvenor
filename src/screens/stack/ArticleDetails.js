import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GoBackBtn from '../../components/GoBackBtn';
import ButtonMain from '../../components/ButtonMain';
import {articles} from '../../data/articles';
import {useIsFocused} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ArticleCard from '../../components/ArticleCard';

const ArticleDetails = ({route}) => {
  const article = route.params;
  const filteredArticle = articles.filter(item => item.id !== article.id);

  const [iconColor, setIconColor] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    renderFavorites(article);
  }, [isFocused]);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: article.description,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

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
        console.log('add to fav'),
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
    console.log('remove');
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
          <Text style={styles.title}>Article</Text>
        </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: 16, marginBottom: 30}}>
          <Image
            source={article.image}
            style={{width: '100%', height: 300, borderRadius: 24}}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.articleTitle}>{article.title}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
              }}>
              <TouchableOpacity
                onPress={onShare}
                activeOpacity={0.7}
                style={styles.btnContainer}>
                <Image source={require('../../assets/tabIcons/share.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  iconColor ? removeFavorites(article) : addToFavorites(article)
                }
                activeOpacity={0.7}
                style={styles.btnContainer}>
                {iconColor ? (
                  <Image
                    source={require('../../assets/tabIcons/checkedHeart.png')}
                  />
                ) : (
                  <Image
                    source={require('../../assets/tabIcons/heartFill.png')}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.articleDescription}>{article.description}</Text>

          <Text style={styles.articleTitle}>Other Articles</Text>
          {filteredArticle.map(article => (
            <ArticleCard article={article} key={article.id} />
          ))}
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
    marginBottom: 17,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    fontFamily: 'SF Pro',
    lineHeight: '100%',
    color: '#fff',
    padding: 16,
  },
  articleTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    width: 250,
    marginTop: 21,
    marginBottom: 16,
  },
  articleDescription: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },

  articleMainTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginTop: 12,
    marginBottom: 8,
  },
  articleMainDescription: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 24,
  },

  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#453E6D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});

export default ArticleDetails;
