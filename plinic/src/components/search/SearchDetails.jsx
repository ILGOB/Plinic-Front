import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import Thumbnail from '../thumbnail/Thumbnail';
import Pagination from '../pagination/Pagination';
import SelectBox from '../select/SelectBox';

function SearchDetails({ posts, users, q, setCurrentSortType, activePage, handlePageChange }) {
  const label = posts ? '게시글' : '유저';
  const dataLength = posts ? posts.length : users ? users.length : 1;

  return (
    <Wrapper>
      <Header>
        <Label>
          " {q} " 에 대한 {label} 검색 결과
        </Label>
        <SelectBox sortBy={'likes'} setCurrentSortType={setCurrentSortType} />
      </Header>
      <Results>
        {posts &&
          posts.slice(8 * (activePage - 1), 8 * (activePage - 1) + 8).map(post => (
            <PostBox key={post.id}>
              <Thumbnail post img={post.thumbnail} likes={post.like} likeState={post.likeState} size={250} />
              <TextBox>
                <div>{post.title}</div>
                <div>{post.writer}</div>
              </TextBox>
            </PostBox>
          ))}
        {users &&
          users.slice(8 * (activePage - 1), 8 * (activePage - 1) + 8).map(user => (
            <PostBox key={user.id}>
              <User>
                <UserProfile image={user.thumbnail} />
                <div>
                  <UserNickname>{user.writer}</UserNickname>
                  <div>
                    <FontAwesomeIcon icon={faMusic} /> {user.like}
                  </div>
                </div>
              </User>
            </PostBox>
          ))}
      </Results>
      <Pagination activePage={activePage} totalItemsCount={dataLength - 1} handlePageChange={handlePageChange} />
    </Wrapper>
  );
}

export default SearchDetails;

const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;
const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  ${FLEX_CENTER_COLUMN};
  gap: 20px;
`;

const Header = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.color.navy};
  ${({ theme }) => theme.font.size[30]};
  ${({ theme }) => theme.font.weight['bold']};
`;

const Results = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  z-index: -1;
`;

const PostBox = styled.div`
  flex-basis: 25%;
  ${FLEX_CENTER_COLUMN}
  width: 250px;
  gap: 12px;
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

const User = styled.div`
  width: 222px;
  height: fit-content;
  ${FLEX_CENTER_COLUMN};
  gap: 20px;

  & > div:last-child {
    ${FLEX_CENTER_COLUMN};
    gap: 10px;

    & > div:last-child {
      ${FLEX_CENTER};
      align-items: flex-start;
      ${({ theme }) => theme.font.size['16']};
      line-height: 18px;
      color: #555;
      gap: 8px;
    }
  }
`;

const UserProfile = styled.div`
  background: url(${props => props.image}) no-repeat center/cover;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const UserNickname = styled.div`
  ${({ theme }) => theme.font.size['20']};
`;
