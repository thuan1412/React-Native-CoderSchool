import React from 'react';
import {FlatList, Text} from 'react-native';

import Post from './Post';

export default ({feedData}) => {
  return (
    <FlatList
      data={feedData}
      renderItem={({item}) => <Post post={item} />}
      // renderItem={({item}) => <Text> asd</Text>}
      keyExtractor={item => item.id}
    />
  );
};
