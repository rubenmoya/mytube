import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  searchValue: state.search.value,
});

export default connect(mapStateToProps, null)(App);
