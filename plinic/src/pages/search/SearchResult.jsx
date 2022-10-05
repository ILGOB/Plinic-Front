import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../components/input/Input';
import CardCarousel from '../../components/carousel/CardCarousel';
import data from '../../components/post/dummyData';
import { posts } from '../../components/pagination/posts';

function SearchResult() {
  const location = useLocation();
  const q = location.state.q;
  const [searchInput, setSearchInput] = useState(q);
  const [searchSubmit, setSearchSubmit] = useState(q);

  return (
    <Wrapper>
      <Input
        usedFor={'search'}
        userInput={searchInput}
        setUserInput={setSearchInput}
        userSubmit={searchSubmit}
        setUserSubmit={setSearchSubmit}
      />
      <CardCarousel label={'유저'} data={posts.slice(0, 10)} loop={false} detailLink={`/userdetail?q=${q}`} />
      <CardCarousel label={'게시글'} data={data} loop={false} detailLink={`/postdetail?q=${q}`} />
    </Wrapper>
  );
}

export default SearchResult;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 30px;
  ${({ theme }) => theme.align.flexCenterColumn};
  justify-content: flex-start;
  gap: 30px;
`;
