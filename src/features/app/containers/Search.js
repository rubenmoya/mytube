import { connect } from 'react-redux';
import Search from '../components/Search';
import { changeSearchValue } from '../state/actions';

const mapDispatchToProps = dispatch => ({
  handleChange: value => dispatch(changeSearchValue(value)),
});

export default connect(null, mapDispatchToProps)(Search);
