import React from 'react';
import styled from 'styled-components';
import TextBtn from '../button/text/TextBtn';

function Footer({ usedFor, leftOnClick, rightOnClick }) {
  const modalTypes = {
    playlist: ['취소', '생성'],
    membershipWithdrawal: ['네', '아니오'],
  };
  return (
    <Wrapper>
      {usedFor === 'playlist' && <Text>{'장르 또는 분위기에서 하나만 선택해주세요.'}</Text>}
      <ButtonGroup modalType={usedFor}>
        <TextBtn btnName={modalTypes[usedFor][0]} color={'white'} onClick={leftOnClick} />
        <TextBtn btnName={modalTypes[usedFor][1]} color={'lightGreen'} onClick={rightOnClick} />
      </ButtonGroup>
    </Wrapper>
  );
}

export default Footer;

const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;
const WHITE = ({ theme }) => theme.color.white;
const THICK = ({ theme }) => theme.font.weight.thick;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.span`
  color: ${WHITE};
  ${THICK}
  ${({ theme }) => theme.font.size[14]}
`;

const ButtonGroup = styled.div`
  ${FLEX_CENTER}
  width: fit-content;
  gap: 25px;
  margin-left: ${props => (props.modalType === 'playlist' ? '177px' : '401px')};
`;
