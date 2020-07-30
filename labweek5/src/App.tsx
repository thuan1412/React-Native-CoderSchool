import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, ActivityIndicator, FlatList} from 'react-native';

import News from './components/News';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState([]);
  const [page, setpage] = useState(1);

  const getNews = async () => {
    console.log('load more', page);

    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=d53063464f734fc58c8ca7cf46ff7733&page=${page}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        const newArticleList = filterForUniqueArticles(
          articles.concat(data.articles),
        );
        setArticles(newArticleList);
        // setArticles();
        setpage((page) => page + 1);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  const filterForUniqueArticles = (arr) => {
    const cleaned = [];
    arr.forEach((itm) => {
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
    <SafeAreaView>
      <ActivityIndicator color="#999999" size="large" animating={loading} />
      {!loading && (
        <FlatList
          data={articles}
          renderItem={({item}) => <News news={item} />}
          keyExtractor={(news) => news.title}
          onEndReachedThreshold={1}
          onEndReached={getNews}
        />
      )}
    </SafeAreaView>
  );
}
