import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TextBtn = ({ btnName, location, color, onClick }) => {
  const navigate = useNavigate();

  const onClickTxtBtn = () => {
    onClick && onClick();
    location && navigate(`${location}`);
  };

  return (
    <TextBtnStyled onClick={onClickTxtBtn} color={color}>
      {btnName}
    </TextBtnStyled>
  );
};

export default TextBtn;

const WHITE = ({ theme }) => theme.color.white;
const NAVY = ({ theme }) => theme.color.navy;
const LIGHTGREEN = ({ theme }) => theme.color.lightGreen;
const DISABLED = ({ theme }) => theme.color.disabled;

const colorList = { white: WHITE, navy: NAVY, lightGreen: LIGHTGREEN, disabled: DISABLED };

const BOLD = ({ theme }) => theme.font.weight.bold;

const TextBtnStyled = styled.div`
  color: ${props => colorList[props.color]};
  ${({ theme }) => theme.font.size[20]};
  ${BOLD};
  cursor: pointer;
`;
