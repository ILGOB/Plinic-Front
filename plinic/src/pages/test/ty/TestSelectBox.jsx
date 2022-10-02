import React, { useState } from 'react';
import styled from 'styled-components';
import SelectBox from '../../../components/select/SelectBox';

function TestSelect() {
  const [currentSortTypePL, setCurrentSortTypePL] = useState('default');
  const [currentSortTypeLK, setCurrentSortTypeLK] = useState('default');
  return (
    <FlexContainer>
      <FlexContainerColumn>
        <div>정렬 방식 : {currentSortTypePL}</div>
        <SelectBox sortBy={'playlists'} setCurrentSortType={setCurrentSortTypePL} />
      </FlexContainerColumn>
      <FlexContainerColumn>
        <div>정렬 방식 : {currentSortTypeLK}</div>
        <SelectBox sortBy={'likes'} setCurrentSortType={setCurrentSortTypeLK} />
      </FlexContainerColumn>
    </FlexContainer>
  );
}

export default TestSelect;

const FlexContainer = styled.div`
  ${({ theme }) => theme.align.flexCenter}
`;

const FlexContainerColumn = styled.div`
  width: 200px;
  ${({ theme }) => theme.align.FlexContainerColumn}
`;
