import React from 'react';
import Mood from './Mood';
import { moodData } from './moodData';
import styled from 'styled-components';

function MoodList(props) {
  const mood1 = moodData.slice(0, 6);
  const mood2 = moodData.slice(6, 12);
  return (
    <div>
      <Wrapper>
        {mood1.map(mood => {
          return <Mood key={mood.id} name={mood.name} onClick={props.onClick} isClicked={props.isClicked} />;
        })}
      </Wrapper>
      <Wrapper>
        {mood2.map(mood => {
          return <Mood key={mood.id} name={mood.name} onClick={props.onClick} isClicked={props.isClicked} />;
        })}
      </Wrapper>
    </div>
  );
}

export default MoodList;

const Wrapper = styled.div`
  ${({ theme }) => theme.align.flexCenter};
  height: fit-content;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
  &:nth-child(2n + 1) {
    margin-left: 25px;
  }
`;
