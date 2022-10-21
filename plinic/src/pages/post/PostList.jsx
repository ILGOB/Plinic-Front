import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import Thumbnail from '../../components/thumbnail/Thumbnail';
import Pagination from '../../components/pagination/Pagination';

function PostList() {
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState(0);
  const [latestNotice, setLatestNotice] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/notices/?recent=true`).then(res => {
      axios.get(`${process.env.REACT_APP_BASE_URL}/notices/${res.data['0'].id}/`).then(res => {
        setLatestNotice(res.data);
      });
    });
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/posts/?page=${activePage}`).then(res => {
      setData(res.data.results);
      setDataCount(res.data.count);
    });
  }, [activePage]);

  return (
    <Wrapper>
      <NoticeContainer key={latestNotice.id}>
        <div>
          <LinkStyled to="/notices">
            <IconStyled icon={faWarning} />
            [공지]
          </LinkStyled>
          <LinkStyled to={`/notices/${latestNotice.id}`}>{latestNotice.title}</LinkStyled>
        </div>
        <div>{latestNotice.author}</div>
        <div>{latestNotice.created_at}</div>
      </NoticeContainer>

      <Posts>
        {data &&
          data.map(d => (
            <PostBox key={d.id}>
              <LinkStyled to={`/posts/${d.id}`}>
                <Thumbnail
                  post
                  img={d.playlist_info.thumbnail_img_url || `https://source.unsplash.com/random/${d.id}`}
                  likes={d.liker_count}
                  likeState={d.is_like}
                  size={250}
                />
                <TextBox>
                  <div>{d.title}</div>
                  <div>{d.author.nickname}</div>
                </TextBox>
              </LinkStyled>
            </PostBox>
          ))}
      </Posts>
      <Pagination activePage={activePage} totalItemsCount={dataCount} handlePageChange={handlePageChange} />
    </Wrapper>
  );
}

export default PostList;

const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;
const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;
const BOLDTEXT = ({ theme }) => theme.font.weight['bold'];
const DANGER = ({ theme }) => theme.color.warning;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  margin-top: 32px;
  ${FLEX_CENTER_COLUMN}
  justify-content: flex-start;
  gap: 32px;
`;

const LinkStyled = styled(Link)`
  width: 100%;
  color: inherit;
  text-decoration: none;
`;

const NoticeContainer = styled.div`
  width: 100%;
  height: 44px;
  padding: 0 32px;

  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  column-gap: 24px;
  align-items: stretch;

  background: #ffe2e2;
  border-radius: 10px;

  div {
    text-align: center;
    line-height: 44px;
    cursor: pointer;
    user-select: none;

    &:first-child {
      color: ${DANGER};
      text-align: left;
    }

    &:last-child {
      text-align: right;
    }

    ${LinkStyled} {
      &:first-child {
        padding-right: 10px;
        ${BOLDTEXT}
      }
    }
  }
`;

const IconStyled = styled(FontAwesomeIcon)`
  padding-right: 10px;
`;

const Posts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;

  ${LinkStyled} {
    ${FLEX_CENTER_COLUMN};
    ${BOLDTEXT}
    width: 250px;
    gap: 12px;
  }
`;

const PostBox = styled.div`
  ${FLEX_CENTER_COLUMN};
  flex-basis: 25%;
  cursor: pointer;
  user-select: none;
`;

const TextBox = styled.div`
  ${FLEX_CENTER_COLUMN}

  div:first-child {
    font-size: 16px;
  }
  div:last-child {
    font-size: 14px;
  }
`;
