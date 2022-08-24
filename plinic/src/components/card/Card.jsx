import React from 'react';
import styled from 'styled-components';

import Thumbnail from '../thumbnail/Thumbnail';

function Card({ thumbnail, title, playlistNum }) {
  return (
    <Wrapper>
      <Thumbnail img={thumbnail} size={150} />
      <Title>{title}</Title>
      <PlaylistNum>{playlistNum}곡</PlaylistNum>
    </Wrapper>
  );
}

export default Card;

const NAVY = ({ theme }) => theme.color.navy;
const WHITE = ({ theme }) => theme.color.white;
const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;
const THICK = ({ theme }) => theme.font.weight.thick;

const Wrapper = styled.div`
  width: 224px;
  height: 322px;
  border-radius: 23px;
  background-color: ${NAVY};
  ${FLEX_CENTER_COLUMN}
`;

const Title = styled.div`
  width: fit-content;
  height: fit-content;
  ${({ theme }) => theme.font.size[20]}
  margin: 28px 0 10px;
  color: ${WHITE};
`;

const PlaylistNum = styled(Title)`
  margin: 0;
`;
