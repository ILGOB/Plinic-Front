import React from 'react';
import styled from 'styled-components';

function Mood(props) {
  return (
    <Container>
      <MoodButton id={props.name} onClick={props.onClick} isClicked={props.isClicked}>
        {props.name}
      </MoodButton>
    </Container>
  );
}

export default Mood;

const NAVY = ({ theme }) => theme.color.navy;
const WHITE = ({ theme }) => theme.color.white;
const ISCLICKED = ({ isClicked, id }) => (isClicked.includes(id) ? NAVY : WHITE);
const SICLICKED = ({ isClicked, id }) => (isClicked.includes(id) ? WHITE : NAVY);

const Container = styled.div`
  /* width: 100vw; */
  margin-right: 3px;
`;

const MoodButton = styled.button`
  width: 70px;
  height: 30px;
  border: solid 2px ${NAVY};
  border-radius: 15px;
  background-color: ${({ isClicked }) => (isClicked ? ISCLICKED : WHITE)};
  ${({ theme }) => theme.align.flexCenter};
  color: ${({ isClicked }) => (isClicked ? SICLICKED : NAVY)};
  ${({ theme }) => theme.font.weight.thick};
  ${({ theme }) => theme.font.size[10]};
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 5px;
  }
`;
