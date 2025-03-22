import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GoBackBtn from '../../components/GoBackBtn';
import ButtonMain from '../../components/ButtonMain';
import ContinueBtn from '../../components/ContinueBtn';
import {exercises} from '../../data/exercises';
import {useState} from 'react';

const BackTrain = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [startTraining, setStartTraining] = useState(false);
  const [toggleTimer, setToggleTimer] = useState(false);

  const filtered = exercises.filter(exercise => exercise.category === 'Back');
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
          <Text style={styles.title}>Back training</Text>
          <ContinueBtn handleNextTrain={handleNextTrain} />
        </View>
      </SafeAreaView>

      <ScrollView>
        <View style={{marginHorizontal: 16, marginBottom: 130}}>
          <Image
            source={filtered[currentIdx].image}
            style={{width: '100%', borderRadius: 24, marginTop: 17}}
          />
          <Text style={styles.progressText}>Task {currentIdx + 1}/3</Text>
          <Text style={styles.articleTitle}>{filtered[currentIdx].title}</Text>
          {startTraining ? (
            <View>
              <Text style={styles.articleDescription} numberOfLines={4}>
                {filtered[currentIdx].description}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  gap: 20,
                  marginTop: 45,
                }}>
                <View
                  style={{
                    width: 66,
                    height: 66,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: '#731DE5',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>12</Text>
                </View>

                <View
                  style={{
                    width: 84,
                    height: 84,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: '#05C04D',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>12</Text>
                </View>
                <View
                  style={{
                    width: 66,
                    height: 66,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: '#FA8009',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>12</Text>
                </View>
              </View>
            </View>
          ) : (
            <Text style={styles.articleDescription}>
              {filtered[currentIdx].description}
            </Text>
          )}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        {startTraining ? (
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 16,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: '#453E6D',
                borderRadius: 16,
                height: 50,
                width: '35%',
                marginTop: 16,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('../../assets/tabIcons/pause.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setToggleTimer(!toggleTimer)}
              activeOpacity={0.7}
              style={{
                height: 50,
                borderRadius: 16,
                marginTop: 16,
                backgroundColor: toggleTimer
                  ? '#453E6D'
                  : 'rgba(0, 205, 112, 1)',
                paddingHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'center',
                width: '60%',
                borderWidth: toggleTimer ? 1 : 0,
                borderColor: toggleTimer ? '#00CD70' : null,
              }}>
              <Text
                style={{
                  color: toggleTimer ? '#00CD70' : 'rgba(16, 14, 27, 1)',
                  fontWeight: '700',
                  fontSize: 16,
                }}>
                Start
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => setStartTraining(true)}
            activeOpacity={0.7}
            style={{
              height: 50,
              marginHorizontal: 16,
              borderRadius: 16,
              marginTop: 16,
              backgroundColor: 'rgba(0, 205, 112, 1)',
              paddingHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'rgba(16, 14, 27, 1)',
                fontWeight: '700',
                fontSize: 16,
              }}>
              Start
            </Text>
          </TouchableOpacity>
        )}
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

export default BackTrain;
