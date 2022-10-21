import React, { useEffect, useState } from 'react';
import loginAtom from '../../recoil/dummy-login/loginAtom';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Thumbnail from '../../components/thumbnail/Thumbnail';
import Pagination from '../../components/pagination/Pagination';
import { posts } from '../../components/pagination/posts';

function PostList() {
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const latestNotice = data.filter(notice => {
    if (notice.id === 1) {
      return notice;
    }
  });

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
  };

  useEffect(() => {
    setData(posts);
  }, []);

  return (
    <Wrapper>
      <HeaderContainer>
        {latestNotice.map(n => (
          <NoticeContainer key={n.id} isLogin={isLogin}>
            <div>
              <LinkStyled to="/notices">
                <IconStyled icon={faWarning} />
                [공지]
              </LinkStyled>
              {n.title}
            </div>
            <div>{n.nickname}</div>
            <div>2022.09.15</div>
          </NoticeContainer>
        ))}

        {isLogin && (
          <>
            <DivideLine />
            <PostButton>
              <LinkStyled to="/post/new">
                <FontAwesomeIcon icon={faPenToSquare} /> 글 작성하기
              </LinkStyled>
            </PostButton>
          </>
        )}
      </HeaderContainer>

      <Posts>
        {data &&
          data.slice(8 * (activePage - 1), 8 * (activePage - 1) + 8).map(d => (
            <PostBox key={d.id}>
              <LinkStyled to={`/posts/${d.id}`}>
                <Thumbnail
                  post
                  img={'http://jolleyonmovies.files.wordpress.com/2014/01/frozen-elsa.jpg'}
                  likes={d.likes}
                  likeState={d.likeState}
                  size={250}
                />
                <TextBox>
                  <div>{d.title}</div>
                  <div>{d.nickname}</div>
                </TextBox>
              </LinkStyled>
            </PostBox>
          ))}
      </Posts>
      <Pagination activePage={activePage} totalItemsCount={data.length - 1} handlePageChange={handlePageChange} />
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
  ${FLEX_CENTER_COLUMN}
  justify-content: flex-start;
  gap: 20px;
`;

const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: none;
  ${BOLDTEXT}
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 44px;
  ${FLEX_CENTER};
  justify-content: space-between;
  gap: 24px;
`;

const NoticeContainer = styled.div`
  width: ${props => (props.isLogin ? '85%' : '100%')};
  height: 100%;
  padding: 0 32px;

  display: grid;
  grid-template-columns: 9fr 1fr 1fr;
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
  }

  ${LinkStyled} {
    padding-right: 10px;
  }
`;

const DivideLine = styled.div`
  width: 2px;
  height: 35px;
  background-color: #d9d9d9;
`;

const PostButton = styled.div`
  ${FLEX_CENTER_COLUMN};
  height: 44px;
  color: ${({ theme }) => theme.color.green};
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.color.green};
  border-radius: 10px;
  transition: all 0.2s ease;

  :hover {
    background-color: ${({ theme }) => theme.color.green};
    color: ${({ theme }) => theme.color.white};
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
