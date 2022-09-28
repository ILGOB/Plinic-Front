import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchResult() {
  const location = useLocation();
  const q = location.state.q;
  return <div>"{q}"에 대한 검색 결과</div>;
}

export default SearchResult;
