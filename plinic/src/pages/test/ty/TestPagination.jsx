import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { posts } from '../../../components/pagination/posts';
import Pagination from '../../../components/pagination/Pagination';
import Thumbnail from '../../../components/thumbnail/Thumbnail';

function TestPagination() {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
    console.log(`${pageNumber}번째 페이지입니다.`);
  };

  useEffect(() => {
    setData(posts);
  }, []);

  return (
    <div>
      <Posts>
        {data &&
          data.slice(8 * (activePage - 1), 8 * (activePage - 1) + 8).map(d => (
            <PostBox key={d.id}>
              <Thumbnail
                post
                img={'http://jolleyonmovies.files.wordpress.com/2014/01/frozen-elsa.jpg'}
                likes={d.likes}
                likeState={d.likeState}
              />
              <TextBox>
                <div>{d.title}</div>
                <div>{d.nickname}</div>
              </TextBox>
            </PostBox>
          ))}
      </Posts>
      <Pagination activePage={activePage} totalItemsCount={data.length - 1} handlePageChange={handlePageChange} />
    </div>
  );
}

export default TestPagination;

const Posts = styled.div`
  padding: 0 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 25px;
  column-gap: 24px;
`;

const PostBox = styled.div`
  width: 222px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  div:first-child {
    font-size: 16px;
  }
  div:last-child {
    font-size: 14px;
  }
`;
