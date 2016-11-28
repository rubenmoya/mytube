import React, { PropTypes } from 'react';

const Search = (props) => {
  const handleChange = event => props.handleChange(event.target.value);

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

Search.propTypes = {
  handleChange: PropTypes.func,
};

export default Search;
