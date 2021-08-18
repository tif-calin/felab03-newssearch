import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';

const Article = props => {
  
  return <li 
    className={styles.Article}
    data-testid="article"
  >
    <span>{props.article.title}</span> <span>|| {props.article.author}</span>
    <p>{props.article.description}</p>
  </li>;
};

Article.propTypes = {
  article: PropTypes.object.isRequired
};

export default Article;
