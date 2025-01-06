import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import BackgroundColor from './screens/BackgroundColorScreen';

function App() {
  return (
    <SafeAreaView style={styles.safeView}>
      <BackgroundColor />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
});

export default App;
