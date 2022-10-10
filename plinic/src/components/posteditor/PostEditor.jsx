import React from 'react';
import Input from '../input/Input';
import styled from 'styled-components';
import PlaylistSwipe from '../swipe/PlaylistSwipe';

function PostEditor({ data, titleInput, setTitleInput, contentInput, setContentInput, setPlaylistInput }) {
  return (
    <Wrapper>
      <Input usedFor={'title'} userInput={titleInput} setUserInput={setTitleInput} />
      <Input usedFor={'content'} userInput={contentInput} setUserInput={setContentInput} />
      <PlaylistSwipe data={data} setPlaylistInput={setPlaylistInput} />
    </Wrapper>
  );
}

export default PostEditor;

const Wrapper = styled.div`
  ${({ theme }) => theme.align.flexCenterColumn}
  gap: 25px;
`;
