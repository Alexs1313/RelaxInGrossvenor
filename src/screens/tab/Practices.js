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
import ArticleCard from '../../components/ArticleCard';

const Practices = () => {
  const navigation = useNavigation();

  const trainings = [
    {
      id: 1,
      title: 'Back',
      image: require('../../assets/trainings/mainBack.png'),
    },
    {
      id: 2,
      title: 'Legs',
      image: require('../../assets/trainings/mainLegs.png'),
    },
    {
      id: 3,
      title: 'Shoulders',
      image: require('../../assets/trainings/mainBack.png'),
    },
  ];

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
            {trainings.map(training => (
              <Pressable
                key={training.id}
                style={styles.cardContainer}
                onPress={() => navigation.navigate('BackTrain', training)}>
                <Image source={training.image} />
                <Text style={styles.cardText}>{training.title}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        <View style={{marginHorizontal: 16, marginBottom: 120}}>
          <Text style={styles.labelText}>Useful articles</Text>
          {articles.map(article => (
            <ArticleCard article={article} key={article.id} />
          ))}
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
