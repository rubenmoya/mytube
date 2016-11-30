import React, { PropTypes } from 'react';
import List from './List';
import Video from '../Video';

const VideoList = ({ videos }) => (
  <List>
    { videos.map(video => <Video key={video.id.videoId} video={video} />) }
  </List>
);

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object),
};

export default VideoList;
