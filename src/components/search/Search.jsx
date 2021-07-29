import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
  return <div className="Search">
    <input 
      type="text" 
      defaultValue={props.query}
      onChange={e => props.setQuery(e.target.value)}
    />
  </div>;
};

Search.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired
};

export default Search;
