import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as noLike, faBookmark as noBookmark } from '@fortawesome/free-regular-svg-icons';
import { faHeart as Like, faBookmark as Bookmark } from '@fortawesome/free-solid-svg-icons';

function TextIconBtn({ data, name }) {
  const [likedState, setLikedState] = useState({
    state: false,
    count: 0,
  });
  const [scrapedState, setScrapedState] = useState({
    state: false,
    count: 0,
  });

  const LikedButton = (data, name) => {
    const onClickLikedBtn = e => {
      console.log('e.target.name :>> ', e.target.name);
      console.log('e.target :>> ', e.target);
      setLikedState({
        ...likedState,
        state: !likedState.state,
        count: likedState.state === true ? likedState.count - 1 : likedState.count + 1,
      });
    };

    return (
      <Wrapper onClick={onClickLikedBtn} name={name} value={likedState.count}>
        <Icon icon={likedState.state ? Like : noLike} />
        {likedState.count}
      </Wrapper>
    );
  };

  const ScrapedButton = (data, name) => {
    const onClickScrapedBtn = e => {
      console.log('e.target.name :>> ', e.target.name);
      console.log('e.target :>> ', e.target);
      setScrapedState({
        ...scrapedState,
        state: !scrapedState.state,
        count: scrapedState.state === true ? scrapedState.count - 1 : scrapedState.count + 1,
      });
    };

    return (
      <Wrapper onClick={onClickScrapedBtn} name={name} value={scrapedState.count}>
        <Icon icon={scrapedState.state ? Bookmark : noBookmark} />
        {scrapedState.count}
      </Wrapper>
    );
  };

  useEffect(() => {
    console.log('likedState :>> ', likedState);
  });

  {
    return name === 'like' ? LikedButton(data, name) : ScrapedButton(data, name);
  }
}

export default TextIconBtn;

const NAVY = ({ theme }) => theme.color.navy;
const WHITE = ({ theme }) => theme.color.white;

const Wrapper = styled.button`
  width: 70px;
  height: 30px;
  border: solid 1.5px ${NAVY};
  border-radius: 15px;
  background-color: ${WHITE};
  ${({ theme }) => theme.align.flexCenter};
  color: ${NAVY};
  ${({ theme }) => theme.font.weight.thick};
  ${({ theme }) => theme.font.size[14]};
  cursor: pointer;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 14px;
  margin-right: 7px;
`;
