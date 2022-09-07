import React from 'react';
import styled from 'styled-components';
import Post from '../../../components/post/Post';
import data from '../../../components/post/dummyData';

function TestPost() {
  return (
    <Wrapper>
      {data.map(postData => (
        <Post
          thumbnail={postData.thumbnail}
          title={postData.title}
          writer={postData.writer}
          likes={postData.like}
          likeState={postData.likeState}
        />
      ))}
    </Wrapper>
  );
}

export default TestPost;

const Wrapper = styled.div`
  ${({ theme }) => theme.align.flexCenter}
  gap: 30px;
`;
