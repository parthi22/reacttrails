import React from 'react';
import {View, Text} from 'react-native';
import {TextBlock} from '../../components/TextBlock';

export const Detail = props => {
  const {route} = props;
  return (
    <View>
      <Text>Text from Local</Text>
      <TextBlock greetings={route.params.data} screenName="Detail" />
    </View>
  );
};
