import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';

const Article = props => {
  console.log(props.article);
  return <div className={styles.Article}>
    <span>{props.article.title}</span> <span>|| {props.article.author}</span>
    <p>{props.article.description}</p>
  </div>;
};

Article.propTypes = {
  article: PropTypes.object.isRequired
};

export default Article;
