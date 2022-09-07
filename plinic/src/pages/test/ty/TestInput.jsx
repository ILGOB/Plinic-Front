import React from 'react';
import styled from 'styled-components';
import Input from '../../../components/input/Input';

function TestInput() {
  return (
    <FlexContainer>
      <Input usedFor={'nickname'} />
      <Input usedFor={'search'} />
      <Input usedFor={'title'} />
      <Input usedFor={'content'} />
    </FlexContainer>
  );
}

export default TestInput;

const FlexContainer = styled.div`
  ${({ theme }) => theme.align.flexCenterColumn}
  gap: 20px;
`;
