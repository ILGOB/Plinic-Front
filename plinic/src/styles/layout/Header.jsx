import React, { useState } from 'react';
import loginAtom from '../../recoil/dummy-login/loginAtom';
import { useRecoilState } from 'recoil';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Header({ noMenu }) {
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Wrapper>
      <LinkStyle to={isLogin ? '/search' : '/'}>
        <img src={'/plinic_logo.png'} height={'60px'} />
      </LinkStyle>
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
  background-color: white;
  z-index: 100000;
  position: relative;
`;

const LinkStyle = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 20px;
`;
