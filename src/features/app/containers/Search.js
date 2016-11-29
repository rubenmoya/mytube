import { connect } from 'react-redux';
import Search from '../components/Search';
import { changeSearchValue, searchVideos } from '../state/actions';

const mapDispatchToProps = dispatch => ({
  handleChange: (value) => {
    dispatch(changeSearchValue(value));
    dispatch(searchVideos({ q: value }));
  },
});

export default connect(null, mapDispatchToProps)(Search);
