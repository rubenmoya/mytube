import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  videos: state.videos,
});

export default connect(mapStateToProps, null)(App);
