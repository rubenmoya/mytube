import React, { PropTypes } from 'react';
import Search from '../containers/Search';

const App = props => (
  <div className="App">
    <Search />
    <p>{props.searchValue}</p>
  </div>
);

App.propTypes = {
  searchValue: PropTypes.string,
};

export default App;
