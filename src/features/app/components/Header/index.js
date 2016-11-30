import React, { PropTypes } from 'react';

import Logo from './Logo';
import SearchInput from './SearchInput';
import Wrapper from './Wrapper';

const Header = ({ onChange }) => {
  const handleChange = event => onChange(event.target.value);

  return (
    <Wrapper>
      <Logo><i className="fa fa-youtube-play" /></Logo>
      <SearchInput type="text" onChange={handleChange} placeholder="Search a video... " className="js-searchInput" />
    </Wrapper>
  );
};

Header.propTypes = {
  onChange: PropTypes.func,
};

export default Header;
