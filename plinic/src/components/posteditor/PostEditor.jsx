import React from 'react';
import Input from '../input/Input';
import styled from 'styled-components';
import PlaylistSwipe from '../swipe/PlaylistSwipe';

function PostEditor({ data, titleInput, setTitleInput, contentInput, setContentInput, setPlaylistInput }) {
  return (
    <Wrapper>
      <TitleWrapper>
        <Input usedFor={'title'} userInput={titleInput} setUserInput={setTitleInput} maxLength={30} />
        <LengthLabel isLong={titleInput.length === 30}>({titleInput.length}/30)</LengthLabel>
      </TitleWrapper>
      <ContentWrapper>
        <Input usedFor={'content'} userInput={contentInput} setUserInput={setContentInput} maxLength={300} />
        <LengthLabel isLong={contentInput.length === 300}>({contentInput.length}/300)</LengthLabel>
      </ContentWrapper>
      <PlaylistSwipe data={data} setPlaylistInput={setPlaylistInput} />
    </Wrapper>
  );
}

export default PostEditor;

const Wrapper = styled.div`
  ${({ theme }) => theme.align.flexCenterColumn}
  gap: 25px;
`;

const TitleWrapper = styled.div`
  position: relative;

  span {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const ContentWrapper = styled.div`
  position: relative;

  span {
    position: absolute;
    right: 12px;
    bottom: 15px;
  }
`;

const LengthLabel = styled.span`
  ${({ theme }) => theme.font.size['16']};
  color: ${props => (props.isLong ? ({ theme }) => theme.color.warning : ({ theme }) => theme.color.darkGray)};
`;
