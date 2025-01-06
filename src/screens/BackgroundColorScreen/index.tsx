import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BACKGROUND_COLOR_SCREEN_TEXT } from '../../constants/strings';
import useRandomBgColor from '../../hooks/useRandomBgColor';


const BackgroundColorScreen = () => {
  const { bgColor, handlePress: handleScreenPress} = useRandomBgColor();

  return (
    <View style={styles.screen}>
      <Pressable style={[styles.pressScreen, { backgroundColor: bgColor }]} onPress={handleScreenPress}>
        <Text style={styles.text}>{BACKGROUND_COLOR_SCREEN_TEXT}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  pressScreen: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default BackgroundColorScreen;
