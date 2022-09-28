import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faGear } from '@fortawesome/free-solid-svg-icons';

function MyPage() {
  const userInfo = (
    <UserInfoWrapper>
      <ProfileWrapper>
        <ProfileIcon icon={faCircleUser} />
        <LinkStyled to={'/search'}>
          <SettingWrapper>
            <SettingIcon icon={faGear} />
          </SettingWrapper>
        </LinkStyled>
      </ProfileWrapper>
      <Nickname>Lami</Nickname>
      <GenreWrapper />
      <PostedLink to={'/post-list'}>내가 작성한 게시글</PostedLink>
    </UserInfoWrapper>
  );

  const playList = <PlayListWrapper>{/* <Title>공개 플레이리스트 2개</Title> */}</PlayListWrapper>;

  return (
    <Wrapper>
      {userInfo}
      {playList}
    </Wrapper>
  );
}

export default MyPage;

const NAVY = ({ theme }) => theme.color.navy;
const BOLD = ({ theme }) => theme.font.weight.bold;
const THICK = ({ theme }) => theme.font.weight.thick;
const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;
const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const UserInfoWrapper = styled.div`
  width: 222px;
  height: fit-content;
  /* background-color: #bfe163; */
  ${FLEX_CENTER_COLUMN}
`;

const ProfileWrapper = styled.div`
  width: fit-content;
  height: 125px;
  /* background-color: red; */
`;

const ProfileIcon = styled(FontAwesomeIcon)`
  font-size: 125px;
`;

const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const SettingWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  position: relative;
  bottom: 40px;
  left: 85px;
  ${FLEX_CENTER_COLUMN};
  cursor: pointer;
`;

const SettingIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const Nickname = styled.span`
  ${BOLD};
  color: ${NAVY};
  ${({ theme }) => theme.font.size[30]};
`;

const GenreWrapper = styled.div`
  width: 222px;
  height: 30px;
  background-color: ${NAVY};
`;

const PostedLink = styled(Link)`
  color: ${NAVY};
  text-decoration: none;
  ${THICK}
`;

const PlayListWrapper = styled.div`
  width: 550px;
  height: fit-content;
  background-color: #94518b;
`;
