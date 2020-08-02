import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';

import News from './components/News';

import {NewsType} from './type';

const styles = StyleSheet.create({
  appView: {
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  articleCountView: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Array<NewsType>>([]);
  const [lastArticleReached, setLastArticleReached] = useState(false);
  const [page, setpage] = useState(1);

  const getNews = async () => {
    if (lastArticleReached) return;
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=d53063464f734fc58c8ca7cf46ff7733&page=${page}&pageSize=10`,
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        if (data.articles.length === 0) {
          setLastArticleReached(true);
        }
        const newArticleList: Array<NewsType> = filterForUniqueArticles(
          articles.concat(data.articles),
        );

        setArticles(newArticleList);
        // setArticles();
        setpage((page) => page + 1);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert(`Error during getting the articles, ${err}`);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  const refresh = () => {
    setArticles([]);
    getNews();
  };
  const filterForUniqueArticles = (arr: Array<NewsType>) => {
    const cleaned: Array<NewsType> = [];
    arr.forEach((itm: NewsType) => {
      let unique = true;
      cleaned.forEach((itm2) => {
        const isEqual = JSON.stringify(itm) === JSON.stringify(itm2);
        if (isEqual) unique = false;
      });
      if (unique) cleaned.push(itm);
    });
    return cleaned;
  };

  return (
    <View>
      <View style={styles.articleCountView}>
        <Text>Total Articles: {articles.length}</Text>
      </View>
      <ActivityIndicator color="#999999" size="large" animating={loading} />
      {!loading && (
        <FlatList
          data={articles}
          renderItem={({item}) => <News news={item} />}
          keyExtractor={(news) => news.title}
          onEndReachedThreshold={1}
          onEndReached={getNews}
          // refreshing={true}
          // onRefresh={refresh}
          ListFooterComponent={<Text>No more article</Text>}
        />
      )}
    </View>
  );
}
