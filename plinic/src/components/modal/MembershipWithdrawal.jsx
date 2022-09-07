import React from 'react';
import styled from 'styled-components';

function MembershipWithdrawal() {
  return (
    <Wrapper>
      <TextWrapper>
        <div>정말 탈퇴하시겠습니까?</div>
        <div>탈퇴 시 플리닉 서비스 이용에 제한이 있을 수 있습니다.</div>
      </TextWrapper>
    </Wrapper>
  );
}

export default MembershipWithdrawal;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;
const WHITE = ({ theme }) => theme.color.white;
const BOLD = ({ theme }) => theme.font.weight.bold;
const THICK = ({ theme }) => theme.font.weight.thick;

const Wrapper = styled.div`
  ${FLEX_CENTER_COLUMN}
  width: 520px;
  height: 350px;
  color: ${WHITE};
`;

const TextWrapper = styled.div`
  ${FLEX_CENTER_COLUMN}
  > div:first-of-type {
    margin-bottom: 43px;
    ${BOLD};
    ${({ theme }) => theme.font.size[30]}
  }
  > div:nth-of-type(2) {
    ${THICK};
    ${({ theme }) => theme.font.size[20]}
  }
`;
