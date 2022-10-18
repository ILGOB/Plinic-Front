import React from 'react';
import Box from '@mui/material/Box';
import MuiSlider from '@mui/material/Slider';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Slider({ setPlaylistNum }) {
  const [sliderValue, setSliderValue] = useState(0);
  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  useEffect(() => {
    setPlaylistNum(sliderValue);
  }, [sliderValue]);

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 5,
      label: '5',
    },
    {
      value: 10,
      label: '10',
    },
    {
      value: 15,
      label: '15',
    },
    {
      value: 20,
      label: '20',
    },
  ];

  return (
    <Wrapper>
      <BoxStyled sx={{ width: 545 }}>
        <Text>곡 개수</Text>
        <SliderStyled
          aria-label="Always visible"
          defaultValue={0}
          step={1}
          max={20}
          marks={marks}
          onChange={handleChange}
          valueLabelDisplay="on"
        />
      </BoxStyled>
    </Wrapper>
  );
}

export default Slider;

const WHITE = ({ theme }) => theme.color.white;
const NAVY = ({ theme }) => theme.color.navy;
const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;
const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;
const THICK = ({ theme }) => theme.font.weight.thick;

const Wrapper = styled.div`
  width: 100%;
  height: 135px;
  ${FLEX_CENTER_COLUMN};
  align-items: flex-start;
  padding-top: 30px;
`;

const BoxStyled = styled(Box)`
  width: 100%;
  ${FLEX_CENTER};
  gap: 20px;
`;

const Text = styled.div`
  width: 80px;
  color: ${WHITE};
  ${THICK};
`;

const SliderStyled = styled(MuiSlider)({
  '& .MuiSlider-track': {
    color: WHITE,
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: WHITE,
  },
  '& .MuiSlider-thumb': {
    backgroundColor: WHITE,
  },
  '& .MuiSlider-valueLabel': {
    backgroundColor: WHITE,
    color: NAVY,
  },
  '& .MuiSlider-mark': {
    color: NAVY,
  },
  '& .MuiSlider-markLabel': {
    color: WHITE,
  },
});
