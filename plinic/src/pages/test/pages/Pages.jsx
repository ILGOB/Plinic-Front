import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Pages() {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/login">Login - 사라질 예정</Link>
      <Link to="/search">Search</Link>
      <Link to="/searchresult">Search Result - Search 페이지 통해서 접근 가능</Link>
      <Link to="/post-list">Post List</Link>
      <Link to="/notice">Notice</Link>
      <Link to="/notice/:noticeId">Notice Page - Notice 페이지 통해서 접근 가능</Link>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/my-page">My Page</Link>
      <Link to="/playlist">Playlist</Link>
    </Wrapper>
  );
}

export default Pages;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${FLEX_CENTER_COLUMN}
  gap: 20px;
`;
