import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GoBackBtn from '../../components/GoBackBtn';
import ButtonMain from '../../components/ButtonMain';
import {ScrollView} from 'react-native-gesture-handler';
import {articles} from '../../data/articles';
import {useNavigation} from '@react-navigation/native';

const Practices = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 16,
            marginBottom: 10,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.title}>Grossveron sport</Text>
          <View style={styles.heartIcon}>
            <Image source={require('../../assets/tabIcons/heart.png')} />
          </View>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={{marginLeft: 16}}>
          <Text style={styles.labelText}>Trainings</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              style={styles.cardContainer}
              onPress={() => navigation.navigate('BackTrain')}>
              <Image source={require('../../assets/trainings/mainBack.png')} />
              <Text style={styles.cardText}>Back</Text>
            </Pressable>
            <Pressable
              style={styles.cardContainer}
              onPress={() => navigation.navigate('LegsTrain')}>
              <Image source={require('../../assets/trainings/mainLegs.png')} />
              <Text style={styles.cardText}>Legs</Text>
            </Pressable>
            <Pressable
              style={styles.cardContainer}
              onPress={() => navigation.navigate('ShouldersTrain')}>
              <Image source={require('../../assets/trainings/mainBack.png')} />
              <Text style={styles.cardText}>Shoulders</Text>
            </Pressable>
          </ScrollView>
        </View>

        <View style={{marginHorizontal: 16, marginBottom: 120}}>
          <Text style={styles.labelText}>Useful articles</Text>
          {articles.map(article => (
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
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text numberOfLines={1} style={styles.articleDescription}>
                {article.description}
              </Text>
            </View>
          ))}
          <ButtonMain text={'Select individually'} />
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

export default Practices;
