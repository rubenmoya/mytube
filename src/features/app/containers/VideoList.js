import { connect } from 'react-redux';
import VideoList from '../components/VideoList';

const mapStateToProps = state => ({
  videos: state.videos,
});

export default connect(mapStateToProps, null)(VideoList);
