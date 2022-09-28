import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../components/input/Input';
import CardCarousel from '../../components/carousel/CardCarousel';
import { genres as data } from '../../components/carousel/genres';

function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [searchSubmit, setSearchSubmit] = useState('');

  return (
    <Wrapper>
      <Input
        usedFor={'search'}
        userInput={searchInput}
        setUserInput={setSearchInput}
        userSubmit={searchSubmit}
        setUserSubmit={setSearchSubmit}
      />
      <ExploreWrapper>
        <CardCarousel label={'장르'} data={data} />
        <CardCarousel label={'분위기'} data={data} />
      </ExploreWrapper>
    </Wrapper>
  );
}

export default Search;

const Wrapper = styled.div`
  ${({ theme }) => theme.align.flexCenterColumn};
  gap: 50px;
`;

const ExploreWrapper = styled.div`
  ${({ theme }) => theme.align.flexCenterColumn};
  gap: 35px;
`;
