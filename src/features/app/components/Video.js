import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Video = styled.article`
  background: #FFF;
  box-shadow: 0 1px 2px rgba(0,0,0, 0.25);
  display: flex;
  margin-bottom: 1rem;
  padding: .6rem;
`;

const Image = styled.img`
  margin-right: 1rem;
`;

const Title = styled.h1`
  font-size: 1rem;
  margin-top: 0;

  & a {
    color: #333;
    text-decoration: none;
  }
`;

const Description = styled.p`
  font-size: .8rem;
`;

const VideoListItem = ({ video: { snippet: { description, thumbnails, title }, id } }) => (
  <Video>
    <Image src={thumbnails.medium.url} alt={title} />
    <section>
      <Title><a href={`https://www.youtube.com/watch?v=${id.videoId}`}>{title}</a></Title>
      <Description>{description}</Description>
    </section>
  </Video>
);

VideoListItem.propTypes = {
  video: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default VideoListItem;
