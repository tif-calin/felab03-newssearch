import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = props => {
  return <ul className="ArticleList">
    {props.articles.map(
      article => <Article article={article} key={article.id} />
    )}
  </ul>;
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticleList;
