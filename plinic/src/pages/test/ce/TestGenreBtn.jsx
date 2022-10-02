import React, { useState, useEffect } from 'react';
import GenreList from '../../../components/button/genre/GenreList';
import MoodList from '../../../components/button/genre/MoodList';
import Genre from '../../../components/button/genre/Genre';
import Mood from '../../../components/button/genre/Mood';
import styled from 'styled-components';

function TestGenreBtn() {
  // 1개 선택
  const [testOne, setTestOne] = useState();

  const clickedMoodBtn = e => {
    setTestOne(e.target.id);
    console.log('클릭클릭', e.target.id);
  };

  // 3개 선택
  const [isClicked, setIsClicked] = useState([]);

  // const onClickMoodBtn = e => {
  //   isClicked.includes(e.target.id)
  //     ? setIsClicked(isClicked.filter(el => el !== e.target.id))
  //     : isClicked.length < 3 && setIsClicked(prev => [...prev, e.target.id]);
  // };

  useEffect(() => {
    console.log('isClicked', isClicked);
  }, [isClicked]);

  const choice = [
    {
      id: 1,
      name: 'acoustic',
    },
    {
      id: 2,
      name: 'blues',
    },
    {
      id: 3,
      name: 'classical',
    },
  ];

  return (
    <>
      게시글 제목 옆: 장르1 or 분위기1
      <Container>
        <PostMood />
        {/* <PostMood /> */}
      </Container>
      {/* <div>
        {choice.map(choice => {
          return <Genre key={choice.id} name={choice.name} />;
        })}
      </div> */}
      {/* <MoodList /> */}
      -----------------------------------------------------------------------------------------------
      {/* 1개 선택 */}
      장르 or 분위기 중 하나만 선택
      <Container>
        {testOne && testOne}
        <MoodList onClick={clickedMoodBtn} isClicked={testOne} />
        <GenreList onClick={clickedMoodBtn} isClicked={testOne} />
      </Container>
      {/* 최대 3개 선택
      <Container>
        <GenreList onClick={onClickMoodBtn} isClicked={isClicked} />
      </Container> */}
      <div>
        {choice.map(choice => {
          return <Genre key={choice.id} name={choice.name} usedFor={'post'} />;
        })}
      </div>
      <div>
        {choice.map(choice => {
          return <Genre key={choice.id} name={choice.name} usedFor={'myPage'} />;
        })}
      </div>
    </>
  );
}

export default TestGenreBtn;

const WHITE = ({ theme }) => theme.color.white;
const MINT = ({ theme }) => theme.color.mint;

const Container = styled.div`
  margin-bottom: 40px;
`;

const PostMood = styled(MoodList)`
  /* padding: 0px 10px;
  width: fit-content;
  height: 20px;
  background-color: ${WHITE};
  color: ${MINT};
  border: 1.5px solid ${MINT};
  border-radius: 15px;
  ${({ theme }) => theme.font.size[12]};
  ${({ theme }) => theme.font.weight.thick};
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 5px;
  } */
`;
