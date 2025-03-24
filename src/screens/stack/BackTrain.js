import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ContinueBtn from '../../components/ContinueBtn';
import {exercises} from '../../data/exercises';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const BackTrain = ({route}) => {
  const item = route.params;
  console.log('item', item.title);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [startTraining, setStartTraining] = useState(false);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [sets, setSets] = useState(0);
  const navigation = useNavigation();

  const min = String(Math.floor(time / 60)).padStart(2, '0');
  const sec = String(time % 60).padStart(2, '0');

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const filtered = exercises.filter(exercise => {
    if (item.title === 'Back') {
      return exercise.category === 'Back';
    } else if (item.title === 'Legs') {
      return exercise.category === 'Legs';
    } else if (item.title === 'Shoulders') {
      return exercise.category === 'Shoulders';
    }
  });

  console.log(filtered[0]);

  const handleNextTrain = () => {
    if (currentIdx === filtered.length - 1) {
      console.log('object');
    } else {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handlePrevTrain = () => {
    if (currentIdx === 0) {
      navigation.goBack();
    } else {
      setCurrentIdx(currentIdx - 1);
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
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handlePrevTrain()}
            style={{
              width: 52,
              height: 52,
              backgroundColor: '#453E6D',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 16,
            }}>
            <Image source={require('../../assets/tabIcons/backArrow.png')} />
          </TouchableOpacity>
          <Text style={styles.title}>
            {item.title === 'Back' && 'Back training'}
            {item.title === 'Legs' && 'Legs training'}
            {item.title === 'Shoulders' && 'Shoulders training'}
          </Text>
          <ContinueBtn handleNextTrain={handleNextTrain} />
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: 16, marginBottom: 130}}>
          <Image
            source={filtered[currentIdx].image}
            style={{width: '100%', borderRadius: 24, marginTop: 17}}
          />
          <Text style={styles.progressText}>Task {currentIdx + 1}/3</Text>
          <Text style={styles.articleTitle}>{filtered[currentIdx].title}</Text>
          {startTraining ? (
            <View>
              <Text style={styles.articleDescription} numberOfLines={5}>
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
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      width: 66,
                      height: 66,
                      borderRadius: 100,
                      borderWidth: 1,
                      borderColor: '#731DE5',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.progressText}>12</Text>
                  </View>
                  <Text style={styles.timerTitle}>Repetitions</Text>
                </View>
                <View style={{alignItems: 'center'}}>
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
                    <Text style={styles.timerNumbers}>
                      {min}:{sec}
                    </Text>
                  </View>
                  <Text style={styles.timerTitle}>Exercise</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      width: 66,
                      height: 66,
                      borderRadius: 100,
                      borderWidth: 1,
                      borderColor: '#FA8009',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.progressText}>{sets}/3</Text>
                  </View>
                  <Text style={styles.timerTitle}>Sets</Text>
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
              onPress={() => setRunning(false)}
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
              onPress={() => {
                setRunning(true);

                if (running) {
                  setTime(0);
                  setRunning(false);
                } else if (time === 0) {
                  if (sets < 3) setSets(prev => prev + 1);
                }
              }}
              activeOpacity={0.7}
              style={{
                height: 50,
                borderRadius: 16,
                marginTop: 16,
                backgroundColor: running ? '#453E6D' : 'rgba(0, 205, 112, 1)',
                paddingHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'center',
                width: '60%',
                borderWidth: running ? 1 : 0,
                borderColor: running ? '#00CD70' : null,
              }}>
              <Text
                style={{
                  color: running ? '#00CD70' : 'rgba(16, 14, 27, 1)',
                  fontWeight: '700',
                  fontSize: 16,
                }}>
                {running ? 'Finish' : 'Start'}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setStartTraining(true);
            }}
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
    color: '#fff',
    padding: 8,
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
  timerNumbers: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  timerTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(153, 153, 153, 1)',
    marginTop: 6,
  },
});

export default BackTrain;
