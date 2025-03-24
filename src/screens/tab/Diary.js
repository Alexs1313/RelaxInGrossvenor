import {StyleSheet, Text, TextInput, View} from 'react-native';

const Diary = () => {
  return (
    <View style={styles.container}>
      <Text>Diary</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Diary;
