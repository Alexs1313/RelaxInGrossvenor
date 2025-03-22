import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GoBackBtn from '../../components/GoBackBtn';
import ButtonMain from '../../components/ButtonMain';
import {articles} from '../../data/articles';

const ArticleDetails = ({route}) => {
  const article = route.params;

  const filteredArticle = articles.filter(item => item.id !== article.id);

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
              <TouchableOpacity activeOpacity={0.7} style={styles.btnContainer}>
                <Image source={require('../../assets/tabIcons/share.png')} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} style={styles.btnContainer}>
                <Image
                  source={require('../../assets/tabIcons/greenHeart.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.articleDescription}>{article.description}</Text>

          <Text style={styles.articleTitle}>Other Articles</Text>
          {filteredArticle.map(article => (
            <View key={article.id}>
              <Pressable
                onPress={() => navigation.navigate('ArticleDetails', article)}>
                <Image
                  source={article.image}
                  style={{width: '100%', height: 180, borderRadius: 16}}
                />
              </Pressable>

              <TouchableOpacity
                activeOpacity={0.6}
                style={{position: 'absolute', right: 10, top: 10}}>
                <Image
                  source={require('../../assets/tabIcons/heartFill.png')}
                />
              </TouchableOpacity>
              <Text style={styles.articleMainTitle}>{article.title}</Text>
              <Text numberOfLines={1} style={styles.articleMainDescription}>
                {article.description}
              </Text>
            </View>
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
