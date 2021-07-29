import React from 'react';
import PropTypes from 'prop-types';

const Article = props => {
  return <div className="Article">
    {props.article.title}
  </div>;
};

Article.propTypes = {
  article: PropTypes.object.isRequired
};

export default Article;
