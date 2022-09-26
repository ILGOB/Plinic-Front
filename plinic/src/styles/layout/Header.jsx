import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header({ noMenu }) {
  return (
    <Wrapper>
      <LinkStyle to="/">
        <img src={'/plinic_logo.png'} height={'60px'} />
      </LinkStyle>
      {noMenu || (
        <Menu>
          <LinkStyle to="/search">
            <SearchIcon icon={faMagnifyingGlass} />
          </LinkStyle>
          <DivideLine />
          <LinkStyle to="/login">로그인</LinkStyle>
          <Button to="/login">회원가입</Button>
        </Menu>
      )}
    </Wrapper>
  );
}

export default Header;

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
