import React, { PropTypes } from 'react';
import List from './List';
import Video from '../Video';

const VideoList = (props) => {
  const videos = props.videos.map(video => <Video key={video.id.videoId} video={video} />);
  return <List>{videos}</List>;
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object),
};

export default VideoList;
