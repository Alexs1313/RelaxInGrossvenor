import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import GoBackBtn from '../../components/GoBackBtn';
import ButtonMain from '../../components/ButtonMain';
import ContinueBtn from '../../components/ContinueBtn';
import {exercises} from '../../data/exercises';
import {useState} from 'react';

const LegsTrain = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const filtered = exercises.filter(exercise => exercise.category === 'Legs');
  console.log(filtered[0]);

  const handleNextTrain = () => {
    if (currentIdx === filtered.length - 1) {
      console.log('object');
    } else {
      setCurrentIdx(currentIdx + 1);
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
            justifyContent: 'space-between',
          }}>
          <GoBackBtn />
          <Text style={styles.title}>Legs training</Text>
          <ContinueBtn handleNextTrain={handleNextTrain} />
        </View>
      </SafeAreaView>

      <ScrollView>
        <View style={{marginHorizontal: 16, marginBottom: 110}}>
          <Image
            source={filtered[currentIdx].image}
            style={{width: '100%', borderRadius: 24}}
          />
          <Text style={styles.progressText}>Task {currentIdx + 1}/3</Text>
          <Text style={styles.articleTitle}>{filtered[currentIdx].title}</Text>
          <Text style={styles.articleDescription}>
            {filtered[currentIdx].description}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <ButtonMain text={'Start'} />
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

  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#453E6D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },

  articleTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    marginTop: 12,
    marginBottom: 16,
  },
  articleDescription: {
    fontSize: 16,
    fontWeight: '300',
    color: '#fff',
    marginBottom: 16,
  },
  progressText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginTop: 21,
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

export default LegsTrain;
