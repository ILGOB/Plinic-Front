import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Header({ noMenu }) {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const loginHeader = (
    <LinkStyle to="/search">
      <LoginInfo>
        <ProfileIcon icon={faCircleUser} />
        <Nickname>Lami</Nickname>
      </LoginInfo>
    </LinkStyle>
  );
  const logoutHeader = <Button to="/">로그인</Button>;

  return (
    <Wrapper>
      <LinkStyle to={isLogin ? '/search' : '/'}>
        <img src={'/plinic_logo.png'} height={'60px'} />
      </LinkStyle>
      <button onClick={loginHandler}>{isLogin ? 'logout' : 'login'}</button>
      login state : {isLogin ? 'login' : 'logout'}
      {noMenu || (
        <Menu>
          <LinkStyle to="/search">
            <SearchIcon icon={faMagnifyingGlass} />
          </LinkStyle>
          <LinkStyle to="/post-list">게시판</LinkStyle>
          <DivideLine />
          {isLogin ? loginHeader : logoutHeader}
        </Menu>
      )}
    </Wrapper>
  );
}

export default Header;

const NAVY = ({ theme }) => theme.color.navy;
const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;
const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
  color: #6a6a6a;
`;

const DivideLine = styled.div`
  width: 2px;
  height: 30px;
  background-color: #d9d9d9;
`;

const LinkStyle = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 20px;
`;

const Button = styled(LinkStyle)`
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
  padding: 10px 16px;
  border-radius: 12px;
`;

const LoginInfo = styled.div`
  cursor: pointer;
  ${FLEX_CENTER};
  gap: 15px;
`;

const ProfileIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: ${NAVY};
`;

const Nickname = styled.span`
  ${({ theme }) => theme.font.size[16]}
`;
