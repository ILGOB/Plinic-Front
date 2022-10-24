import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import loginAtom from '../../recoil/dummy-login/loginAtom';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCircle, faHeart, faBookmark, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Genre from '../../components/button/genre/Genre';
import dummyData from './dummyData';
import playlistDummyData from '../../components/playlist/dummyData';
import TextIconBtn from '../../components/button/textIcon/TextIconBtn';
import PlaylistComponent from '../../components/playlist/Playlist';

function Post() {
  const { postId } = useParams();

  const loginState = useRecoilValue(loginAtom);
  console.log('loginState :>> ', loginState);

  const [isMounted, setIsMounted] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleDelete = () => {
    alert('삭제');
  };

  console.log('dummyData :>> ', dummyData);
  console.log("dummyData.playlist['genre_name'] :>> ", dummyData.playlist['genre_name']);

  return (
    <Wrapper>
      <div>
        <Writer>by. {dummyData.author}</Writer>
        {loginState ? <Btn onClick={handleDelete}>삭제</Btn> : ''}
      </div>
      <InfoWrapper>
        <Info>
          <PostTitle>{dummyData.playlist.title}</PostTitle>
          <Genre key={dummyData.playlist.id} name={dummyData.playlist['genre_name']} usedFor={'post'} />
        </Info>
        {loginState ? (
          <Menu>
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              onClick={() => {
                setIsShowMenu(current => !current);
                setIsMounted(true);
              }}
            />
            <FloatingMenuWrapper>
              <FloatingMenu $isMounted={isMounted} $isShow={isShowMenu}>
                <LinkStyled to={`/post/edit?state=update&id=${dummyData.id}`}>수정하기</LinkStyled>
                <div>삭제하기</div>
              </FloatingMenu>
            </FloatingMenuWrapper>
          </Menu>
        ) : (
          ''
        )}
      </InfoWrapper>
      <DateWrapper>
        <CreateDate>
          <FontAwesomeIcon icon={faCalendar} />
          <span>{dummyData.created_at}</span>
        </CreateDate>
        {dummyData['is_updated'] && (
          <EditDate>
            <FontAwesomeIcon icon={faCircle} />
            <span>edited {dummyData['updated_at']}</span>
          </EditDate>
        )}
      </DateWrapper>
      <Content>{dummyData.content}</Content>
      <Tag>#띵곡 #센치한느낌 #갬성터질때 #눈물샘폭발 #태그쓰다보니태근하고싶다</Tag>
      <Buttons>
        <TextIconBtn name={'like'} state={dummyData.is_like} count={dummyData.liker_count} />
        {loginState ? (
          '게시글 수정하기'
        ) : (
          <TextIconBtn
            name={'bookmark'}
            state={dummyData.playlist.is_scrapped}
            count={dummyData.playlist.scrapper_count}
          />
        )}
      </Buttons>
      <PlaylistComponent data={playlistDummyData} usedFor={'post'} />
    </Wrapper>
  );
}

export default Post;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;
const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 32px;
  ${FLEX_CENTER_COLUMN}
  align-items: flex-start;
`;

const Writer = styled.span`
  color: #555555;
  margin-right: 10px;
`;

const Btn = styled.span`
  ${({ theme }) => theme.font.size[20]}
  ${({ theme }) => theme.font.weight.thick}
  cursor: pointer;
`;

const InfoWrapper = styled.div`
  width: 100%;
  ${FLEX_CENTER};
  justify-content: space-between;
`;

const Info = styled.div`
  ${FLEX_CENTER}
`;
const PostTitle = styled.h1`
  ${({ theme }) => theme.font.size[30]};
  margin: 12px 16px 12px 0;
`;

const DateWrapper = styled.div`
  ${FLEX_CENTER}
`;
const CreateDate = styled.div`
  color: #555555;
  & > :first-child {
    margin-right: 5px;
  }
`;
const EditDate = styled.div`
  ${FLEX_CENTER};
  color: #777777;
  & > :first-child {
    font-size: 5px;
    margin: 0 10px;
  }
`;
const Content = styled.p`
  margin: 24px 0 16px;
`;
const Tag = styled.span``;

// const PlaylistWrapper = styled.div`
//   width: 100%;
//   ${FLEX_CENTER};
//   gap: 20px;
// `;

// const VideoFrame = styled.div`
//   width: 600px;
//   height: 360px;
//   border-radius: 20px;
//   overflow: hidden;
// `;

// const PlayList = styled.div`
//   margin-top: 40px;
//   height: 360px;
//   overflow-y: scroll;
//   width: 468px;
//   margin-bottom: 40px;
// `;

// const PlayListItem = styled.li`
//   ${({ theme }) => theme.font.size[14]}
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   list-style: none;
//   padding: 10px;
//   cursor: pointer;
//   &:hover {
//     background-color: #38a3a5;
//   }
// `;

// const Num = styled.span`
//   margin-right: 10px;
// `;
// const Title = styled.span``;
// const Time = styled.span``;

const Buttons = styled.div`
  margin-top: 24px;
  ${FLEX_CENTER};
  gap: 24px;
`;
const LikeBtn = styled.div`
  padding: 10px 20px;
  border-radius: 30px;
  border: 2px solid navy;
  ${FLEX_CENTER};
  & > :first-child {
    margin-right: 10px;
    ${({ theme }) => theme.font.size[20]}
  }
`;

const BookmarkBtn = styled(LikeBtn)``;

/* =============================================================
수정/삭제 메뉴 관련
============================================================= */

const slideUpDown = isShow => keyframes`
  from {
    -webkit-transform: translateY(${isShow ? 0 : 110}px);
            transform: translateY(${isShow ? 0 : 110}px);
  }
  to {
    -webkit-transform: translateY(${isShow ? 110 : 0}px);
            transform: translateY(${isShow ? 110 : 0}px);
  }
`;

const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Menu = styled.div`
  width: 25px;
  height: 25px;
  position: relative;

  & > .fa-ellipsis-vertical {
    width: 100%;
    ${({ theme }) => theme.font.size['20']};
    ${({ theme }) => theme.font.weight['bold']};
    color: ${({ theme }) => theme.color.disabled};
    cursor: pointer;
  }
`;

const FloatingMenuWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 25px;
  width: 120px;
  height: 100px;
  overflow: hidden;
`;

const FloatingMenu = styled.div`
  background: ${({ theme }) => theme.color.white};
  padding: 5px 0;
  position: absolute;
  top: -100px;
  right: 10px;
  width: 80px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.disabled};
  animation: ${props => props.$isMounted && slideUpDown(props.$isShow)} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  ${FLEX_CENTER_COLUMN};

  & > a,
  & > div {
    width: 100%;
    padding: 5px;
    text-align: center;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.color.navy};
    }
  }
`;
