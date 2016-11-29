import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  margin: 1rem auto;
  max-width: 900px;
  padding: .8rem;
  width: 100%;
`;

const Search = (props) => {
  const handleChange = event => props.handleChange(event.target.value);

  return (
    <div>
      <Input type="text" onChange={handleChange} placeholder="Search a video... "/>
    </div>
  );
};

Search.propTypes = {
  handleChange: PropTypes.func,
};

export default Search;
