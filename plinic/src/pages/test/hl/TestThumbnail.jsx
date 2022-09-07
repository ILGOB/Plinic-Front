import React from 'react';
import styled from 'styled-components';
import Thumbnail from '../../../components/thumbnail/Thumbnail';
import data from '../../../components/thumbnail/dummyData';

function TestThumbnail() {
  console.log(data);
  return (
    <>
      <ThumbnailsWrapper>
        {data.map(el => (
          <Thumbnail key={el.id} img={el.thumbnail} />
        ))}
      </ThumbnailsWrapper>
      <ThumbnailsWrapper>
        {data.map(el => (
          <Thumbnail key={el.id} post img={el.thumbnail} likes={el.like} likeState={el.likeState} />
        ))}
      </ThumbnailsWrapper>
      <ThumbnailsWrapper>
        {data.map(el => (
          <Thumbnail key={el.id} post img={el.thumbnail} size={140} likes={el.like} likeState={el.likeState} />
        ))}
      </ThumbnailsWrapper>
    </>
  );
}

export default TestThumbnail;

const ThumbnailsWrapper = styled.div`
  display: flex;
`;
