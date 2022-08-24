import React from 'react';
import styled from 'styled-components';

import Card from '../../../components/card/Card';
import data from '../../../components/card/dummyData';

function TestCard() {
  return (
    <Wrapper>
      {data.map(cardData => (
        <Card thumbnail={cardData.thumbnail} title={cardData.title} playlistNum={cardData.playlistNum} />
      ))}
    </Wrapper>
  );
}

export default TestCard;

const Wrapper = styled.div`
  ${({ theme }) => theme.align.flexCenter}
  gap: 30px;
`;
