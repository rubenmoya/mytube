import { connect } from 'react-redux';
import Header from '../components/Header';
import { changeSearchValue, searchVideos } from '../state/actions';

const mapDispatchToProps = dispatch => ({
  onChange: (value) => {
    dispatch(changeSearchValue(value));
    dispatch(searchVideos({ q: value }));
  },
});

export default connect(null, mapDispatchToProps)(Header);
