import React from 'react';
import styled from 'styled-components';
import Thumbnail from '../thumbnail/Thumbnail';

function Post({ thumbnail, title, writer, likes, likeState }) {
  const clicked = () => {
    console.log('post clicked');
  };

  return (
    <Wrapper onClick={clicked}>
      <Thumbnail img={thumbnail} post size={222} likes={likes} likeState={likeState} />
      <Title>{title}</Title>
      <Writer>{writer}</Writer>
    </Wrapper>
  );
}

export default Post;

const NAVY = ({ theme }) => theme.color.navy;
const WHITE = ({ theme }) => theme.color.white;
const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;
const THICK = ({ theme }) => theme.font.weight.thick;

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  ${FLEX_CENTER_COLUMN}
  cursor:pointer;
`;

const Title = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 12px 0 4px;
`;

const Writer = styled(Title)`
  ${({ theme }) => theme.font.size[14]}
  margin: 0;
`;
