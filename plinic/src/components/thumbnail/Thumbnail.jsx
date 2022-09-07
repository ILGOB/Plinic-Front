import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as noLike } from '@fortawesome/free-regular-svg-icons';
import { faHeart as Like } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Thumbnail({ size, img, post, likes, likeState }) {
  const clickedThumbnail = () => {
    console.log('click');
  };

  return (
    <Wrapper img={img} onClick={clickedThumbnail} size={size}>
      {post && (
        <LikesWrapper>
          <Icon likes={likes} icon={likeState ? Like : noLike} />
          <Text>{likes}</Text>
        </LikesWrapper>
      )}
    </Wrapper>
  );
}

export default Thumbnail;

const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;
const FONT = ({ theme }) => theme.font.size[14];
const WHITE = ({ theme }) => theme.color.white;

const Wrapper = styled.div`
  width: ${({ size }) => (size ? size : 222)}px;
  height: ${({ size }) => (size ? size : 222)}px;
  background: url(${props => props.img}) no-repeat center/cover;
  border-radius: 10px;
  position: relative;
`;

const LikesWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  bottom: 10px;
  right: 10px;
  ${FLEX_CENTER}
  color: ${WHITE};
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 12px;
  margin-right: 6px;
`;

const Text = styled.span`
  ${FONT}
`;
