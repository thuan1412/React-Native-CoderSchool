import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {Post} from '../types/index';

const styles = StyleSheet.create({
  post: {
    height: 450,
    paddingVertical: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  postHeader: {
    marginHorizontal: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
  postContent: {
    marginVertical: 5,
    height: 220,
  },
  image: {
    height: 250,
    marginVertical: 5,
    marginBottom: 15,
  },
  actionBar: {
    paddingHorizontal: 5,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  likeCommentSend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionBtn: {
    marginRight: 10,
  },
  caption: {
    marginLeft: 10,
    fontSize: 20,
  },
  likesCounter: {
    marginLeft: 7,
    flexDirection: 'row',
  },
});

export default ({post}: {post: Post}) => {
  const [view, useView]: [Boolean, Function] = useState(false);
  return (
    <View style={styles.post}>
      {/* Post header */}
      <View style={styles.postHeader}>
        <Image style={styles.avatar} source={post.image} resizeMode="cover" />
        <Text>{post.userName}</Text>
      </View>

      {/* postContent */}
      <View style={styles.postContent}>
        {/* image */}
        <Text style={styles.caption}>{post.caption}</Text>

        <Image style={styles.image} source={post.image} resizeMode="repeat" />

        {/* actionbar */}
        <View style={styles.actionBar}>
          <View style={styles.likeCommentSend}>
            <TouchableHighlight
              onPress={(): void => {
                Alert.alert('You like this post');
              }}>
              <Feather style={styles.actionBtn} name="heart" size={25} />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={(): void => {
                Alert.alert('You comment this post');
              }}>
              <Feather
                style={styles.actionBtn}
                name="message-square"
                size={25}
              />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={(): void => {
                Alert.alert('You share this post');
              }}>
              <Feather style={styles.actionBtn} name="share" size={25} />
            </TouchableHighlight>
          </View>
          <Feather style={styles.actionBtn} name="bookmark" size={25} />
        </View>

        {/* like counter */}
        <View style={styles.likesCounter}>
          <Feather style={styles.actionBtn} name="heart" size={20} />
          <Text>{post.likes} Likes</Text>
        </View>
      </View>
    </View>
  );
};
