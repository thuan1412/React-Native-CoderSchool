import React from 'react';
import {View, Image, Text} from 'react-native';

import HomeHeader from '../components/HomeHeader';
import NewFeed from '../components/NewFeed';

import {Post as PostInterface} from '../types/index';

const feedData: PostInterface[] = [
  {
    id: '1',
    userName: 'Facebook',
    image: require('../assets/feedData/react.png'),
    avatar: require('../assets/feedData/react.png'),
    caption: 'Check it out',
    likes: 1000,
  },
  {
    id: '2',
    userName: 'Nodejs',
    image: require('../assets/feedData/nodejs.jpg'),
    avatar: require('../assets/feedData/nodejs.jpg'),
    caption: "It's awesome",
    likes: 1000,
  },
  {
    id: '3',
    userName: 'Thuan',
    image: require('../assets/feedData/vue.jpeg'),
    avatar: require('../assets/feedData/tensorflow.jpg'),
    caption: 'Check it out',
    likes: 1000,
  },
];

export default () => {
  return (
    <View>
      <HomeHeader />
      <NewFeed feedData={feedData} />
    </View>
  );
};
