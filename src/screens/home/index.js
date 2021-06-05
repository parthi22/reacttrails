import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TextBlock} from '../../components/TextBlock';

export const Home = props => {
  const {navigation} = props;
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Detail', {data: 'hello'})}
        title="Navigate to Detail"
      />
      <TextBlock greetings="Hello" screenName="Home" />
    </View>
  );
};
