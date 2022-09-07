import React from 'react';
import Switch from '../../../components/switch/Switch';
import styled from 'styled-components';

function TestSwitch() {
  return (
    <Wrapper>
      <Switch leftLabel={'비공개'} rightLabel={'공개'} />
      <Switch leftLabel={'스크랩'} rightLabel={'공개'} />
    </Wrapper>
  );
}

export default TestSwitch;

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  ${({ theme }) => theme.align.flexCenter}
  gap: 200px;
`;
