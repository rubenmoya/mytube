import React, { PropTypes } from 'react';

import Description from './Description';
import Image from './Image';
import Title from './Title';
import Wrapper from './Wrapper';

const VideoListItem = ({ video: { snippet: { description, thumbnails, title }, id } }) => (
  <Wrapper>
    <Image src={thumbnails.medium.url} alt={title} />
    <section>
      <Title><a href={`https://www.youtube.com/watch?v=${id.videoId}`}>{title}</a></Title>
      <Description>{description}</Description>
    </section>
  </Wrapper>
);

VideoListItem.propTypes = {
  video: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default VideoListItem;
