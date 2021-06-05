import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const TextBlock = props => {
  const {greetings, screenName} = props;
  return (
    <View>
      <Text style={styles.text}>{`${greetings} ${screenName}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 100,
  },
});
