import React, { useEffect } from 'react';
import Search from '../components/search/Search';
import ArticleList from '../components/list/ArticleList';
import { fetchArticles } from '../services/apiNews.js';

const NewsSearch = () => {
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [query, setQuery] = React.useState('florida');

  useEffect(async () => {
    setLoading(true);
    fetchArticles(query)
      .then(news => setArticles(news))
      .then(() => setLoading(false))
    ;
  }, [query]);

  return <div className="NewsSearch">
    <Search query={query} setQuery={setQuery}/>
    {loading ? <span>loading</span> : <ArticleList articles={articles}/>}
  </div>;
};

export default NewsSearch;
