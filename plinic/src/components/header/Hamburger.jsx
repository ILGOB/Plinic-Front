import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function Hamburger() {
  return (
    <Wrapper>
      <XIcon icon={faX} />
      <Menu>
        <Login>
          <Text>로그인이 필요합니다.</Text>
          <JoinBtn>로그인/회원가입</JoinBtn>
        </Login>
        <Text>검색하기</Text>
        <Text>About Us</Text>
      </Menu>
    </Wrapper>
  );
}

export default Hamburger;

const WHITE = ({ theme }) => theme.color.white;
const BLACK = ({ theme }) => theme.color.black;
const DISABLED = ({ theme }) => theme.color.disabled;

const Wrapper = styled.div`
  width: 309px;
  height: 100vh;
  background-color: ${DISABLED};
`;

const XIcon = styled(FontAwesomeIcon)`
  color: ${WHITE};
`;

const Menu = styled.div`
  ${({ theme }) => theme.align.flexCenterColumn};
  height: 100vh;
`;

const Text = styled.div`
  color: ${WHITE};
  ${({ theme }) => theme.font.weight.thick};
  padding: 10px;
`;

const Login = styled.div`
  ${({ theme }) => theme.align.flexCenterColumn};
  margin-bottom: 17px;
`;

const JoinBtn = styled.button`
  width: 180px;
  height: 40px;
  background-color: ${WHITE};
  border-radius: 50px;
  border: solid ${WHITE};
  color: ${BLACK};
  ${({ theme }) => theme.font.weight.bold};
  ${({ theme }) => theme.font.size[16]};
`;
