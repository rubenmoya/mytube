import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Video from './Video';

const List = styled.section`
  margin: 0 auto;
  max-width: 900px;
`;

const VideoList = (props) => {
  const videos = props.videos.map(video => <Video key={video.id.videoId} video={video} />);
  return <List>{videos}</List>;
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object),
};

export default VideoList;
