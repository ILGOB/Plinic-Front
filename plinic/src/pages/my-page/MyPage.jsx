import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import loginAtom from '../../recoil/dummy-login/loginAtom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faGear } from '@fortawesome/free-solid-svg-icons';
import Switch from '../../components/switch/Switch';
import CardSwipe from '../../components/swipe/CardSwipe';
import Genre from '../../components/button/genre/Genre';

import dummyData from './dummyData';

function MyPage() {
  const [switchState, setSwitchState] = useState(true);
  const [choiceSwitchLabel, setChoiceSwitchLabel] = useState('공개');
  const loginState = useRecoilValue(loginAtom);
  console.log('loginState :>> ', loginState);

  console.log('myPage switch :>> ', switchState);

  const userInfo = (
    <UserInfoWrapper>
      <ProfileWrapper>
        <ProfileIcon icon={faCircleUser} />
        {loginState && (
          <LinkStyled to={'/profile/edit'}>
            <SettingWrapper>
              <SettingIcon icon={faGear} />
            </SettingWrapper>
          </LinkStyled>
        )}
      </ProfileWrapper>
      <Nickname>{dummyData.nickname}</Nickname>
      <GenreWrapper>
        {dummyData.genre.map((el, idx) => {
          return <Genre key={idx} name={el} usedFor={'myPage'} />;
        })}
      </GenreWrapper>
      {loginState ? (
        <PostedLink to={'/posts'}>내가 작성한 게시글</PostedLink>
      ) : (
        <PostedLink to={'/posts'}>Lami 님이 작성한 게시글</PostedLink>
      )}
    </UserInfoWrapper>
  );

  const playList = (
    <PlayListWrapper>
      <Header>
        {loginState ? (
          // 내 마이페이지
          <>
            <Title>{choiceSwitchLabel} 플레이리스트 2개</Title>
            <Switch
              leftLabel={'비공개'}
              rightLabel={'공개'}
              switchState={switchState}
              setSwitchState={setSwitchState}
              choiceSwitchLabel={choiceSwitchLabel}
              setChoiceSwitchLabel={setChoiceSwitchLabel}
            />
          </>
        ) : (
          // 다른사람 마이페이지
          <>
            <Title>{choiceSwitchLabel} 플레이리스트 2개</Title>
            <Switch
              leftLabel={'스크랩'}
              rightLabel={'공개'}
              switchState={switchState}
              setSwitchState={setSwitchState}
              choiceSwitchLabel={choiceSwitchLabel}
              setChoiceSwitchLabel={setChoiceSwitchLabel}
            />
          </>
        )}
      </Header>
      <CardSwipe />
    </PlayListWrapper>
  );

  return (
    <Wrapper>
      <FlexContainer>
        {userInfo}
        {playList}
      </FlexContainer>
    </Wrapper>
  );
}

export default MyPage;

const NAVY = ({ theme }) => theme.color.navy;
const THICK = ({ theme }) => theme.font.weight.thick;
const BOLD = ({ theme }) => theme.font.weight.bold;
const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;
const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
  padding-top: calc((100vh - 60px - 414px) / 2);
  align-items: flex-start;
`;

const FlexContainer = styled.div`
  ${FLEX_CENTER};
  justify-content: space-around;
  gap: 200px;
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
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  position: relative;
  bottom: 30px;
  left: 95px;
  ${FLEX_CENTER_COLUMN};
  cursor: pointer;
`;

const SettingIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
`;

const Nickname = styled.span`
  ${BOLD};
  color: ${NAVY};
  ${({ theme }) => theme.font.size[30]};
  margin-top: 30px;
  margin-bottom: 24px;
`;

const GenreWrapper = styled.div`
  ${FLEX_CENTER};
  gap: 24px;
`;

const PostedLink = styled(Link)`
  color: ${NAVY};
  text-decoration: none;
  ${THICK}
  margin-top: 20px;
`;

const PlayListWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  /* background-color: #94518b; */
`;

const Header = styled.div`
  ${FLEX_CENTER};
  gap: 213px;
`;

const Title = styled.span`
  ${BOLD}
  color: ${NAVY};
  ${({ theme }) => theme.font.size[20]};
`;
