import React from 'react';

import {View, Image, Text} from 'react-native';

export default ({post}) => {
  console.log(post);
  const styles = {
    postContainer: {
      backgroundColor: 'gray',
    },
    postHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 12,
    },
    userName: {
      marginLeft: 12,
      fontSize: 15,
      fontWeight: '500',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 50 / 2,
    },
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image
          style={styles.avatar}
          source={require('../assets/avatar.png')}
          resizeMode="cover"
        />
        <Text style={styles.userName}>{post.userName}</Text>
      </View>
    </View>
  );
};
