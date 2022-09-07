import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Switch({ leftLabel, rightLabel }) {
  const [toggleState, setToggleState] = useState(true);

  const clickedLeftLabel = () => {
    console.log(leftLabel);
    setToggleState(false);
  };

  const clickedRightLabel = () => {
    console.log(rightLabel);
    setToggleState(true);
  };

  const clickedToggleButton = () => {
    setToggleState(!toggleState);
  };

  useEffect(() => {
    console.log(toggleState);
  }, [toggleState]);

  return (
    <Wrapper>
      <Label onClick={clickedLeftLabel}>{leftLabel}</Label>
      <ToggleWrapper state={toggleState} onClick={clickedToggleButton}>
        <ToggleButton state={toggleState} onClick={clickedToggleButton} />
      </ToggleWrapper>
      <Label onClick={clickedRightLabel}>{rightLabel}</Label>
    </Wrapper>
  );
}

export default Switch;

const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;
const NAVY = ({ theme }) => theme.color.navy;
const DISABLED = ({ theme }) => theme.color.disabled;

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  ${FLEX_CENTER}
`;

const Label = styled.span`
  cursor: pointer;
`;

const ToggleWrapper = styled.div`
  width: 52px;
  height: 32px;
  background-color: ${props => (props.state ? NAVY : DISABLED)};
  border-radius: 35px;
  display: flex;
  align-items: center;
  padding: 4px;
  margin: 0 11px;
  cursor: pointer;
`;

const ToggleButton = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 50%;
  transform: translateX(${props => (props.state ? '20px' : '0px')});
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`;
