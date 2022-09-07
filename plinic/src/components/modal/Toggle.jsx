import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

function Toggle({ onClick, text, state }) {
  const [toggleIsShow, setToggleIsShow] = useState(state);

  useEffect(() => {
    if (state) {
      setToggleIsShow(true);
      console.log(`${text} 토글 state`, state);
    } else {
      setTimeout(() => {
        setToggleIsShow(false);
        console.log(`${text} 토글 state`, state);
      }, 400);
    }
  }, [state]);

  return (
    <Wrapper>
      <ToggleMenu onClick={onClick}>
        <span>{text}</span>
        <FontAwesomeIcon icon={state ? faCaretUp : faCaretDown} />
      </ToggleMenu>
      <ContentsWrapper className={`${state ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
        {toggleIsShow && <Contents> {text} 토글 열림</Contents>}
      </ContentsWrapper>
    </Wrapper>
  );
}

export default Toggle;

const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;
const BOLD = ({ theme }) => theme.font.weight.bold;
const WHITE = ({ theme }) => theme.color.white;

const slideDown = keyframes`
 0% {
    transform: translateY(-30px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideUp = keyframes`
 0% {
   transform: translateY(0);
   opacity: 1;
}

100% {
    transform: translateY(-30px);
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  ${BOLD};
  .slide-fade-in-dropdown {
    animation: ${slideDown} 0.4s ease;
  }
  .slide-fade-out-dropdown {
    animation: ${slideUp} 0.4s ease;
    animation-fill-mode: forwards;
  }
`;

const ToggleMenu = styled.div`
  cursor: pointer;
  ${FLEX_CENTER}
  justify-content: flex-start;
  gap: 10px;
  ${({ theme }) => theme.font.size[20]}
  color: ${WHITE};
`;

const ContentsWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Contents = styled.div`
  width: 100%;
  height: 80px;
`;
