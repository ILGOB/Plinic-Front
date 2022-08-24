import React from 'react';
import Slider from '../../../components/slider/Slider';
import styled from 'styled-components';

function TestSlider() {
  return (
    <Wrapper>
      <Slider />
    </Wrapper>
  );
}

export default TestSlider;

const Wrapper = styled.div`
  width: 900px;
  height: 80vh;
  background-color: grey;
`;
