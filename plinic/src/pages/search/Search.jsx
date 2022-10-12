import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../components/input/Input';
import CardCarousel from '../../components/carousel/CardCarousel';
import SearchDetails from '../../components/search/SearchDetails';
import { genres as data } from '../../components/carousel/genres';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchOptions = {
    q: searchParams.get('q') || '',
    type: searchParams.get('type') || '',
    sort: searchParams.get('sort') || '',
  };

  const isTag = searchOptions.q[0] === '#' ? true : false;
  const [activePage, setActivePage] = useState(1);
  const [searchInput, setSearchInput] = useState(searchOptions.q || '');
  const [searchSubmit, setSearchSubmit] = useState(searchOptions.q || '');
  const [currentSortType, setCurrentSortType] = useState(searchOptions.sort);

  const handlePageChange = pageNum => {
    setActivePage(pageNum);
  };

  const detailsProps = {
    setSearchParams: setSearchParams,
    q: searchOptions.q,
    setCurrentSortType: setCurrentSortType,
    activePage: activePage,
    handlePageChange: handlePageChange,
  };

  const explore = (
    <CarouselWrapper>
      <CardCarousel label={'장르'} data={data} loop={true} />
      <CardCarousel label={'분위기'} data={data} loop={true} />
    </CarouselWrapper>
  );
  const result = (
    <CarouselWrapper>
      <CardCarousel
        label={'유저'}
        data={data.slice(0, 10)}
        loop={false}
        detailLink={`/search?q=${searchInput}&type=user&sort=default`}
      />
      <CardCarousel
        label={'게시글'}
        data={data}
        loop={false}
        detailLink={`/search?q=${searchInput}&type=post&sort=default`}
      />
    </CarouselWrapper>
  );
  const userDetails = <SearchDetails users={data} {...detailsProps} />;
  const postDetails = <SearchDetails posts={data} {...detailsProps} />;

  return (
    <Wrapper>
      <Input
        usedFor={'search'}
        userInput={searchInput}
        setUserInput={setSearchInput}
        userSubmit={searchSubmit}
        setUserSubmit={setSearchSubmit}
      />
      {searchOptions.q === ''
        ? explore
        : isTag
        ? postDetails
        : searchOptions.type === ''
        ? result
        : searchOptions.type === 'user'
        ? userDetails
        : postDetails}
    </Wrapper>
  );
}

export default Search;

const Wrapper = styled.div`
  ${({ theme }) => theme.align.flexCenterColumn};
  gap: 50px;
`;

const CarouselWrapper = styled.div`
  ${({ theme }) => theme.align.flexCenterColumn};
  gap: 35px;
`;
