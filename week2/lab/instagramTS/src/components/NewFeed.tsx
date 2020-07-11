import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import Post from './Post';
import {Post as PostInterface} from '../types/index';

export default ({feedData}: {feedData: PostInterface[]}) => {
  return (
    <FlatList data={feedData} renderItem={({item}) => <Post post={item} />} />
  );
};
